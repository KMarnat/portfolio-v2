import { ProjectList } from "../ProjectsList/ProjectList";
import { ProjectTab } from "../ProjectTab/ProjectTab";
import { Tab } from "../../utils/ProjectsData";

interface MainProps {
  activeTab: Tab | null;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab | null>>;
  projectsDataArray: Tab[];
}

export const Main: React.FC<MainProps> = ({ activeTab, setActiveTab, projectsDataArray }) => {
  return (
    <main className="main">
      {!activeTab && (
        <article className="welcome">
          <div className="welcome__title">
            <span>W</span>
            <span>e</span>
            <span>l</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
            <span>.</span>
          </div>
          <div className="welcome__desc">
            <p>
              My name is Kaspar Marnat. I'm aspiring web developer from Tallinn, Estonia. Currently
              I am finishing studies at Tallinn Polytechnic School and also looking for a developer
              job. If you want to see more info about me or contact me, use the buttons top right.
            </p>
            <p>
              Here you will find my projects. Some of them I developed during my internship, some I
              even designed myself. Hope you enjoy your stay!
            </p>
          </div>
        </article>
      )}
      {projectsDataArray.some((project) => project.title === activeTab?.title) && (
        <ProjectTab key={activeTab?.title} activeTab={activeTab} />
      )}

      <ProjectList projectsDataArray={projectsDataArray} setActiveTab={setActiveTab} />
    </main>
  );
};
