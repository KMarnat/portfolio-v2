/// <reference types="vite-plugin-svgr/client" />

import CornerImage from "../../assets/corner-right.svg?react";

export const Footer: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <footer className="footer">
      <p>©2024 kmarnat.netlify.app</p>
      <CornerImage className={`corner corner--bottom ${isHovered ? "hover" : ""}`} />
    </footer>
  );
};
