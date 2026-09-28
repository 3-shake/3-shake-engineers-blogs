import fetchedFavicons from "@.contents/favicons.json";
import type { PostItem } from "@src/types";
import {
  getFaviconSrcFromHostname,
  getHostFromURL,
  getMemberById,
  getMemberPath,
} from "@src/utils/helper";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { useState } from "react";

dayjs.extend(relativeTime);

type PostLinkProps = {
  item: PostItem;
  currentTime: number;
};

const PostLink: React.FC<PostLinkProps> = (props) => {
  const { authorId, title, isoDate, link, dateMiliSeconds } = props.item;
  const member = getMemberById(authorId);
  if (!member) return null;

  const hostname = getHostFromURL(link);
  const threeDaysAgo = props.currentTime - 86400000 * 3;

  return (
    <article className="post-link">
      <Link href={getMemberPath(member.id)} className="post-link__author">
        <img src={member.avatarSrc} alt="" className="post-link__author-img" />
        <div className="post-link__author-name">
          <div className="post-link__author-name">{member.name}</div>
          <time dateTime={isoDate} className="post-link__date">
            {dayjs(isoDate).fromNow()}
          </time>
        </div>
      </Link>
      <a href={link} className="post-link__main-link">
        <h2 className="post-link__title">{title}</h2>
        {hostname && (
          <div className="post-link__site">
            {(fetchedFavicons as string[]).includes(hostname) && (
              <img
                src={getFaviconSrcFromHostname(hostname)}
                width={14}
                height={14}
                className="post-link__site-favicon"
                alt=""
              />
            )}
            {hostname}
          </div>
        )}
      </a>
      {dateMiliSeconds && dateMiliSeconds > threeDaysAgo && (
        <div className="post-link__new-label">NEW</div>
      )}
    </article>
  );
};

type PostListProps = {
  items: PostItem[];
};

export const PostList: React.FC<PostListProps> = (props) => {
  const [displayItemsCount, setDisplayItemsCount] = useState<number>(32);
  const [currentTime] = useState(() => Date.now());
  const totalItemsCount = props.items?.length || 0;
  const canLoadMore = totalItemsCount - displayItemsCount > 0;

  const displayItems = props.items.slice(0, displayItemsCount);

  if (!totalItemsCount) {
    return <div className="post-list-empty">No posts yet</div>;
  }

  return (
    <>
      <div className="post-list">
        {displayItems.map((item, i) => (
          <PostLink
            // biome-ignore lint/suspicious/noArrayIndexKey: link は複数フィード間で重複しうるため
            key={`post-item-${i}`}
            item={item}
            currentTime={currentTime}
          />
        ))}
      </div>
      {canLoadMore && (
        <div className="post-list-load">
          <button
            type="button"
            onClick={() => setDisplayItemsCount(displayItemsCount + 32)}
            className="post-list-load__button"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </>
  );
};
