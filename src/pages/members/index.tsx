import { members } from "@members";
import { config } from "@site.config";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { PageSEO } from "@src/components/PageSEO";
import type { Member } from "@src/types";
import { getMemberPath } from "@src/utils/helper";
import type { NextPage } from "next";
import Link from "next/link";

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <Link href={getMemberPath(member.id)} className="member-card">
      <div className="member-card__avatar">
        <img
          src={member.avatarSrc}
          alt={member.name}
          className="member-card__avatar-img"
        />
      </div>
      <h2 className="member-card__name"> {member.name}</h2>
      <p className="member-card__bio">{member.bio}</p>
    </Link>
  );
};

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="Members" path="/members" />
      <ContentWrapper>
        <section className="members">
          <h1 className="members__title">
            Members{" "}
            <span className="members__title-team">
              @ {config.siteMeta.teamName}
            </span>
          </h1>
          <div className="members__cards">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
