import { Tab } from "./../../utils/ProjectsData";

interface ProjectListProps {
  projectsDataArray: Tab[];
  setActiveTab: React.Dispatch<React.SetStateAction<Tab | null>>;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projectsDataArray, setActiveTab }) => {
  return (
    <div className="projects">
      <h4 className="projects__title">Projects</h4>
      <nav className="projects__nav">
        <ul className="projects__list">
          {projectsDataArray.map((project, i) => (
            <li onClick={() => setActiveTab(project)} key={i}>
              {project.title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
