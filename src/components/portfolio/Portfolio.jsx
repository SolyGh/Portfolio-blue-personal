import React from "react";
import "./portfolio.css";

const portfolioItems = [
  {
    image: require("../../assets/WhatsApp Image 2024-09-11 at 01.06.41_4446b13a.jpg"),
    title: "ZWEB website Builder",
    githubLink: "https://github.com/SolyGh/graduation-project",
    demoLink:
      "https://zagwebbuilder-git-main-m2001saids-projects.vercel.app/en",
  },
  {
    image: require("../../assets/real.jpg"),
    title: "Real estate company website",
    githubLink: "https://github.com/SolyGh/Real-Estate-soli",
    demoLink: "https://real-estate-khaki-tau.vercel.app/",
  },
  {
    image: require("../../assets/arch.jpg"),
    title: "Archetecture Soli company website",
    githubLink: "https://github.com/SolyGh/Architecture-Soli",
    demoLink: "https://architect-umber.vercel.app/",
  },
  {
    image: require("../../assets/finance.jpg"),
    title: "financial portfolio website",
    githubLink: "https://github.com/SolyGh/Frontend",
    demoLink:
      "https://fiancialpo-git-b7cc2d-ahmedsolimanth57gmail-ahmedsolis-projects.vercel.app/",
  },
  {
    image: require("../../assets/shoppify.jpg"),
    title: "clothes shoppiing website",
    githubLink: "https://github.com/SolyGh/shopping",
    demoLink: "https://shpping-hub.vercel.app/://dribbble.com/Alien_pixels",
  },
  {
    image: require("../../assets/portf.jpg"),
    title: "Portfolio website",
    githubLink: "https://github.com/SolyGh/portfolio-dark",
    demoLink: "https://portfolio-dark-two.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItems.map((item, index) => (
          <article className="portfolio__item" key={index} data-aos="fade-up">
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>

            <div className="portfolio__item-cta">
              <a href={item.githubLink} className="btn">
                Github
              </a>
              <a
                href={item.demoLink}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
