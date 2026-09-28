import { config } from "@site.config";
import { ContentWrapper } from "@src/components/ContentWrapper";

export const SiteFooter: React.FC = () => (
  <footer className="site-footer">
    <ContentWrapper>
      <p>© {config.siteMeta.teamName}</p>
    </ContentWrapper>
  </footer>
);
