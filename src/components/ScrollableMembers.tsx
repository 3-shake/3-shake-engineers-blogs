import { members } from "@members";
import { getMemberPath } from "@src/utils/helper";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";

export const ScrollableMembers: React.FC = () => {
  const [shuffledMembers, setShuffledMembers] = useState(members);

  useEffect(() => {
    // クライアント側でマウント後にシャッフル
    setShuffledMembers([...members].sort(() => 0.5 - Math.random()));
  }, []);

  return (
    <div className="scrollable-members">
      {shuffledMembers.map((member) => (
        <Link
          key={member.id}
          href={getMemberPath(member.id)}
          className="scrollable-member__link"
        >
          <span className="scrollable-member__image">
            <img
              src={member.avatarSrc}
              alt={member.name}
              className="scrollable-member__img"
            />
          </span>
          <span className="scrollable-member__name">{member.name}</span>
          <span className="scrollable-member__role">{member.role}</span>
        </Link>
      ))}
    </div>
  );
};
