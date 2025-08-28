// 汎用的なJSONファイルの型定義
declare module "*.json" {
  const value: unknown;
  export default value;
}

// posts.jsonの特定の型定義（パスエイリアス）
declare module "@.contents/posts.json" {
  import { PostItem } from "@src/types";
  const posts: PostItem[];
  export default posts;
}

// posts.jsonの特定の型定義（相対パス - feed.ts用）
declare module "../../.contents/posts.json" {
  import { PostItem } from "@src/types";
  const posts: PostItem[];
  export default posts;
}
