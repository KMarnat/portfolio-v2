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
          <a href="https://github.com/KMarnat" target="_blank">
            <Github />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kasparmarnat/" target="_blank">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kmarnat/" target="_blank">
            <Instagram />
          </a>
        </li>
      </ul>
    </header>
  );
};
