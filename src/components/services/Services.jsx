import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <h5 className="text-lg text-gray-600 text-center">What I Offer</h5>
      <h2 className="text-4xl font-bold mb-8 text-center">Services</h2>

      <div className="container services__container mx-auto">
        {/* Web Development Service */}
        <article
          className="service p-6 bg-white shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="service__head">
            <h3 className="text-2xl font-semibold">Web Development</h3>
          </div>

          <ul className="service__list mt-4 space-y-4">
            <li data-aos="fade-right" className="flex items-center">
              <FaCheck className="service__list-icon text-green-500 mr-2" />
              <p>Developing responsive and dynamic websites.</p>
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="100"
              className="flex items-center"
            >
              <FaCheck className="service__list-icon text-green-500 mr-2" />
              <p>Proficient in modern web technologies and frameworks.</p>
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="200"
              className="flex items-center"
            >
              <FaCheck className="service__list-icon text-green-500 mr-2" />
              <p>Custom web solutions tailored to your needs.</p>
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="300"
              className="flex items-center"
            >
              <FaCheck className="service__list-icon text-green-500 mr-2" />
              <p>Front-end and back-end development expertise.</p>
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="400"
              className="flex items-center"
            >
              <FaCheck className="service__list-icon text-green-500 mr-2" />
              <p>
                Performance optimization for fast and smooth user experiences.
              </p>
            </li>
            <li
              data-aos="fade-right"
              data-aos-delay="500"
              className="flex items-center"
            >
              <FaCheck className="service__list-icon text-green-500 mr-2" />
              <p>SEO-friendly design to improve search engine rankings.</p>
            </li>
          </ul>
        </article>

        {/* Content Creation Service */}
        <article
          className="service p-6 bg-white shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="service__head">
            <h3 className="text-2xl font-semibold">Content Creation</h3>
          </div>

          <ul className="service__list mt-4 space-y-4">
            <li data-aos="fade-up" className="flex items-center">
              <FaCheck className="service__list-icon text-green-500 mr-2" />
              <p>
                I love brainstorming ideas .
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex items-center"
            >
              <FaCheck className="service__list-icon text-green-500 mr-2" />
              <p>
                Worked as a content creator for a social media company during my
                first academic year.
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex items-center"
            >
              <FaCheck className="service__list-icon text-green-500 mr-2" />
              <p>Imaginative and creative approach to content creation.</p>
            </li>
      
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
