import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="experience" className="py-16 bg-transparent">
      <div className="text-center mb-12">
        <h5 className="text-[var(--color-primary)] text-xl font-semibold">
          What Skills I Have
        </h5>
        <h2 className="text-3xl font-bold text-white">My Experience</h2>
      </div>

      <div className="container exp_container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div
            data-aos="fade-up"
            className="experience_frontend bg-transparent  text-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl exp_heading font-semibold text-[#000000] mb-4">
              Frontend Development
            </h3>
            <div className="space-y-4 exp_data">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "Tailwind",
                "React",
              ].map((skill) => (
                <article
                  key={skill}
                  className="experience_details flex items-center space-x-2"
                >
                  <BsFillPatchCheckFill className="text-[var(--color-golden)] text-xl" />
                  <div>
                    <h4 className="font-semibold text-lg text-[#000]">
                      {skill}
                    </h4>
                    <small className="text-gray-500">
                      {skill === "JavaScript" ? "Mastering" : "Experienced"}
                    </small>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="experience_backend bg-transparent   p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl  exp_heading font-semibold text-[#000] mb-4">
              Backend Development
            </h3>
            <div className="space-y-4 exp_data">
              {["Node", "MongoDB", "SQL", "Python"].map((skill) => (
                <article
                  key={skill}
                  className="experience_details flex items-center space-x-2"
                >
                  <BsFillPatchCheckFill className="text-[var(--color-golden)] text-xl" />
                  <div>
                    <h4 className="font-semibold text-lg text-[#000]">
                      {skill}
                    </h4>
                    <small className="text-gray-500">
                      {skill === "Python" ? "" : ""}
                    </small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
