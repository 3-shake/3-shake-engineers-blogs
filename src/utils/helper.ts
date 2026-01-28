import { PostItem } from "@src/types";
import { members } from "@members";
import posts from "@.contents/posts.json";

export function getMemberByName(name: string) {
  return members.find((member) => member.name === name);
}

export function getMemberById(id: string) {
  return members.find((member) => member.id === id);
}

export function getMemberPostsById(id: string) {
  return (posts as PostItem[]).filter((item) => item.authorId === id);
}
export function getHostFromURL(str: string) {
  const url = new URL(str);
  return url?.hostname || "blog";
}
export function getFaviconSrcFromHostname(hostname: string) {
  return `https://www.google.com/s2/favicons?domain=${hostname}`;
}
export function getMemberPath(id: string) {
  return `/members/${encodeURIComponent(id)}`;
}

export type LimitedPostsResult = {
  posts: PostItem[];
  overflowCounts: Record<string, number>;
};

export function limitPostsPerMember(
  allPosts: PostItem[],
  maxPerMember: number
): LimitedPostsResult {
  const countByAuthor: Record<string, number> = {};
  const totalByAuthor: Record<string, number> = {};

  for (const post of allPosts) {
    totalByAuthor[post.authorId] = (totalByAuthor[post.authorId] || 0) + 1;
  }

  const limitedPosts: PostItem[] = [];

  for (const post of allPosts) {
    const currentCount = countByAuthor[post.authorId] || 0;
    if (currentCount < maxPerMember) {
      limitedPosts.push(post);
      countByAuthor[post.authorId] = currentCount + 1;
    }
  }

  const overflowCounts: Record<string, number> = {};
  for (const authorId of Object.keys(totalByAuthor)) {
    const total = totalByAuthor[authorId];
    const displayed = countByAuthor[authorId] || 0;
    if (total > displayed) {
      overflowCounts[authorId] = total - displayed;
    }
  }

  return { posts: limitedPosts, overflowCounts };
}
