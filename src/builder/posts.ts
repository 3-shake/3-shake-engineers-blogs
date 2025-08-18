import fs from "fs-extra";
import Parser from "rss-parser";
import { members } from "../../members";
import { PostItem, Member } from "../types";
export default {};

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string | undefined;
  isoDate?: string | undefined;
  dateMiliSeconds: number;
};

const parser = new Parser();
let allPostItems: PostItem[] = [];

async function fetchFeedItems(url: string): Promise<FeedItem[]> {
  try {
    console.log(`Fetching feed from: ${url}`);
    const feed = await parser.parseURL(url);

    if (!feed?.items?.length) {
      console.warn(`No items found in feed: ${url}`);
      return [];
    }

    return feed.items
      .map(({ title, contentSnippet, link, isoDate }) => {
        if (!title || !link) {
          console.warn(
            `Skipping item with missing title or link in feed: ${url}`,
          );
          return null;
        }

        const item: FeedItem = {
          title,
          link,
          contentSnippet: contentSnippet?.replace(/\n|\u2028/g, ""),
          isoDate,
          dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
        };
        return item;
      })
      .filter((item): item is FeedItem => item !== null);
  } catch (error) {
    console.error(
      `Error fetching feed from ${url}:`,
      error instanceof Error ? error.message : "Unknown error",
    );
    return [];
  }
}

async function getFeedItemsFromSources(
  sources: undefined | string[],
): Promise<FeedItem[]> {
  if (!sources?.length) {
    console.warn("No sources provided");
    return [];
  }

  const feedItems: FeedItem[] = [];
  for (const url of sources) {
    const items = await fetchFeedItems(url);
    feedItems.push(...items);
  }
  return feedItems;
}

async function getMemberFeedItems(member: Member): Promise<PostItem[]> {
  const { id, sources, name, includeUrlRegex, excludeUrlRegex } = member;

  console.log(`Processing feeds for member: ${name}`);
  const feedItems = await getFeedItemsFromSources(sources);

  let postItems = feedItems.map((item) => ({
    ...item,
    authorName: name,
    authorId: id,
  }));

  if (includeUrlRegex) {
    const regex = new RegExp(includeUrlRegex);
    postItems = postItems.filter((item) => {
      const matches = item.link.match(regex);
      if (!matches) {
        console.debug(
          `Filtered out item not matching includeUrlRegex: ${item.link}`,
        );
      }
      return matches;
    });
  }

  if (excludeUrlRegex) {
    const regex = new RegExp(excludeUrlRegex);
    postItems = postItems.filter((item) => {
      const matches = item.link.match(regex);
      if (matches) {
        console.debug(
          `Filtered out item matching excludeUrlRegex: ${item.link}`,
        );
      }
      return !matches;
    });
  }

  return postItems;
}

(async function () {
  try {
    console.log("Starting feed processing...");

    for (const member of members) {
      const items = await getMemberFeedItems(member);
      allPostItems.push(...items);
    }

    allPostItems.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds);

    fs.ensureDirSync(".contents");
    const json = JSON.stringify(allPostItems).replaceAll(/[\u2028\u2029]/g, "");
    fs.writeFileSync(".contents/posts.json", json);

    console.log(
      `Successfully processed ${allPostItems.length} posts from ${members.length} members`,
    );
  } catch (error) {
    console.error(
      "Fatal error during feed processing:",
      error instanceof Error ? error.message : "Unknown error",
    );
    process.exit(1);
  }
})();
