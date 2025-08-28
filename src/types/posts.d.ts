declare module "*.json" {
  const value: unknown;
  export default value;
}

declare module "@.contents/posts.json" {
  import { PostItem } from "@src/types";
  const posts: PostItem[];
  export default posts;
}

declare module "../../.contents/posts.json" {
  import { PostItem } from "@src/types";
  const posts: PostItem[];
  export default posts;
}
