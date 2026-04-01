import fs from "fs-extra";
import path from "path";
import { PostItem } from "../types.js";

const FAVICON_DIR = "public/favicons";
const FETCH_TIMEOUT_MS = 10_000;

function getHostname(url: string): string | null {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

async function fetchFavicon(hostname: string): Promise<Buffer | null> {
  const url = `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    return Buffer.from(await res.arrayBuffer());
  } catch {
    return null;
  }
}

(async function () {
  const posts: PostItem[] = JSON.parse(
    fs.readFileSync(".contents/posts.json", "utf-8"),
  );

  const hostnames = Array.from(
    new Set(
      posts
        .map((p) => getHostname(p.link))
        .filter((h): h is string => h !== null),
    ),
  );

  fs.ensureDirSync(FAVICON_DIR);
  console.log(`Fetching favicons for ${hostnames.length} domains...`);

  const fetchedHostnames: string[] = [];

  for (const hostname of hostnames) {
    const dest = path.join(FAVICON_DIR, `${hostname}.png`);
    if (fs.existsSync(dest)) {
      console.log(`Skip ${hostname} (cached)`);
      fetchedHostnames.push(hostname);
      continue;
    }
    const buffer = await fetchFavicon(hostname);
    if (buffer) {
      fs.writeFileSync(dest, buffer);
      console.log(`Fetched ${hostname}`);
      fetchedHostnames.push(hostname);
    } else {
      console.warn(`Failed to fetch favicon for ${hostname}`);
    }
  }

  fs.ensureDirSync(".contents");
  fs.writeFileSync(
    ".contents/favicons.json",
    JSON.stringify(fetchedHostnames),
  );

  console.log(`Done. Favicons saved to ${FAVICON_DIR}`);
  process.exit(0);
})();
