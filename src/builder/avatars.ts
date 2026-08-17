import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";

const AVATARS_DIR = "public/avatars";
const WEBP_DIR = "public/avatars-webp";
const QUALITY = 75;

function checkCwebpInstalled(): void {
  try {
    execSync("which cwebp", { stdio: "pipe" });
  } catch {
    console.error(
      "❌ cwebp not found. Install it with: brew install webp (macOS) or apt install webp (Linux)",
    );
    process.exit(1);
  }
}

(async function () {
  checkCwebpInstalled();
  fs.ensureDirSync(WEBP_DIR);

  const files = fs.readdirSync(AVATARS_DIR);
  const imageFiles = files.filter((file) => {
    if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) return false;
    const filePath = path.join(AVATARS_DIR, file);
    try {
      const result = execSync(`file "${filePath}"`, { encoding: "utf-8" });
      return /(JPEG|PNG|WebP)/i.test(result);
    } catch {
      return false;
    }
  });

  console.log(`Converting ${imageFiles.length} avatar images to WebP...`);

  let failedCount = 0;
  for (const file of imageFiles) {
    const inputPath = path.join(AVATARS_DIR, file);
    const outputPath = path.join(WEBP_DIR, `${path.parse(file).name}.webp`);

    try {
      execSync(`cwebp "${inputPath}" -o "${outputPath}" -q ${QUALITY}`, {
        stdio: "pipe",
      });
      const inputSize = fs.statSync(inputPath).size;
      const outputSize = fs.statSync(outputPath).size;
      const reduction = (((inputSize - outputSize) / inputSize) * 100).toFixed(
        1,
      );
      console.log(
        `✓ ${file} → ${path.basename(outputPath)} (${reduction}% smaller)`,
      );
    } catch (error) {
      failedCount++;
      console.warn(
        `⚠ Failed to convert ${file}: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  if (failedCount > 0) {
    console.error(`\n❌ ${failedCount} file(s) failed to convert`);
    process.exit(1);
  }

  console.log("Avatar WebP conversion complete.");
  process.exit(0);
})();
