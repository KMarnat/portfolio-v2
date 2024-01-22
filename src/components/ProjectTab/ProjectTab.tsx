import { useEffect, useRef } from "react";
import { Tab } from "../../utils/ProjectsData";

interface ProjectTabProps {
  activeTab: Tab | null;
}

export const ProjectTab: React.FC<ProjectTabProps> = ({ activeTab }) => {
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabRef.current) {
      tabRef.current.style.animation = "fadeInAnimation ease 2.5s";
      tabRef.current.style.animationIterationCount = "1";
      tabRef.current.style.animationFillMode = "forwards";
    }
  }, [activeTab]);

  return (
    <article className="project-tab" ref={tabRef}>
      <h2 className="project-tab__title">{activeTab?.title}</h2>
      <div className="project-tab__desc">
        <div className="project-tab__description">
          <p>{activeTab?.description}</p>
          <p className="project-tab__tools">Used in project: {activeTab?.usedInProject}</p>
          <div className="project-tab__links">
            <a href={activeTab?.siteUrl} target="_blank">
              View site
            </a>
            <a href={activeTab?.githubUrl} target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
