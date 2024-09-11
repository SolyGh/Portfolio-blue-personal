import React from "react";
import { FaLinkedin, FaGithubSquare, FaFacebook } from "react-icons/fa";

const HeaderSocials = ({ className }) => {
  return (
    <div className={`flex ${className}`}>
      <a
        href="https://www.linkedin.com/in/ahmed-soliman-a32791252/https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-white transition-colors duration-300"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/SolyGh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-white transition-colors duration-300"
      >
        <FaGithubSquare />
      </a>
      <a
        href="https://facebook.comhttps://www.facebook.com/ahmed.soliman.3591267/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-white transition-colors duration-300"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
