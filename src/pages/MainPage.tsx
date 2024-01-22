import { useEffect, useState } from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Main } from "../components/MainContent/MainContent";
import { Tab } from "../utils/ProjectsData";
import { ProjectsData } from "../utils/ProjectsData";

export const MainPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab | null>(null);
  const projectsDataArray = Object.values(ProjectsData);

  useEffect(() => {
    if (activeTab) {
      document.documentElement.style.setProperty("--grad-1", activeTab.gradient1);
      document.documentElement.style.setProperty("--grad-2", activeTab.gradient2);
    }
    if (!activeTab) {
      document.documentElement.style.setProperty("--grad-1", "rgb(22, 111, 253)");
      document.documentElement.style.setProperty("--grad-2", "rgb(107, 28, 82)");
    }
  }, [activeTab]);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="mainpage" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Header isHovered={isHovered} setActiveTab={setActiveTab} />
      <Main
        projectsDataArray={projectsDataArray}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Footer isHovered={isHovered} />
    </div>
  );
};
