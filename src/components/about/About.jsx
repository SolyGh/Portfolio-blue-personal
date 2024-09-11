import React from "react";
import "./about.css";
import ME from "../../assets/WhatsApp Image 2023-05-15 at 12.55.18 PM.jpeg";
import { FiAward } from "react-icons/fi";
import { FaUsers } from "react-icons/fa6";
import { FaFolderTree } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Ahmed Soliman" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Education</h5>
              <small>
                Bachelor’s degree in Computer and Systems Engineering
              </small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Current Focus</h5>
              <small>
                Building experience and expanding my professional network
              </small>
            </article>
            <article className="about__card">
              <FaFolderTree className="about__icon" />
              <h5>Projects</h5>
              <small>Working on several personal and academic projects</small>
            </article>
          </div>
          <p>
            I recently graduated with a Bachelor’s degree in Computer and
            Systems Engineering. I’m passionate about front-end development and
            am eager to apply my skills in creating innovative and user-friendly
            web applications. My goal is to continue learning, grow my skill
            set, and build a strong portfolio of projects.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
