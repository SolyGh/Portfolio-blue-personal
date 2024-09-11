import React from "react";
import CTA from "./CTA";
import ME from "../../assets/ME11.png";
import HeaderSocials from "./HeaderSocials";
import AOS from "aos";

const Header = () => {
  return (
    <header className="relative h-screen flex flex-col justify-center items-center bg-gray-900 text-white overflow-hidden">
      <div className="text-center">
        <h5 className="text-lg" data-aos="fade-up" data-aos-duration="1000">
          Hello I'm
        </h5>
        <h1
          className="text-4xl font-bold mt-2"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Ahmed Soliman
        </h1>
        <h5
          className="text-xl font-light text-gray-400 mt-1"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          Front End Web Developer
        </h5>
        <CTA
          className="mt-6 items-center"
          data-aos="fade-up"
          data-aos-duration="1600"
        />
        <div
          className="relative mt-6 w-96 sm:w-56 lg:w-96 lg:h-auto h-96 bg-gradient-to-b mx-auto from-blue-600 to-transparent rounded-b-full overflow-hidden flex items-center self-center justify-center"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <img src={ME} alt="Ahmed Soliman" className="w-full scale-110" />
        </div>
        <a
          href="#contact"
          className="absolute bottom-12 right-5 text-gray-300 rotate-90 text-sm hover:text-white transition-transform duration-300"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Scroll Down
        </a>
      </div>
      <HeaderSocials
        className="absolute bottom-4 left-4 flex gap-4 text-gray-400 hover:text-white transition-colors duration-300"
        data-aos="fade-up"
        data-aos-duration="2200"
      />
    </header>
  );
};

export default Header;
