/// <reference types="vite-plugin-svgr/client" />

import Logo from "../../assets/logo.svg?react";
import Github from "../../assets/github.svg?react";
import Instagram from "../../assets/instagram.svg?react";
import Linkedin from "../../assets/linkedin.svg?react";
import CornerImage from "../../assets/corner-left.svg?react";
import { Tab } from "../../utils/ProjectsData";

interface HeaderProps {
  isHovered: boolean;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab | null>>;
}

export const Header: React.FC<HeaderProps> = ({ isHovered, setActiveTab }) => {
  return (
    <header className="header">
      <CornerImage className={`corner corner--top ${isHovered ? "hover" : ""}`} />
      <a href="#" onClick={() => setActiveTab(null)}>
        <Logo className="header__logo" />
      </a>

      <ul className="header__socials">
        <li>
          <a href="#">
            <Github />
          </a>
        </li>
        <li>
          <a href="#">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <Instagram />
          </a>
        </li>
      </ul>
    </header>
  );
};
