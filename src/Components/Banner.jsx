import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import img from "../assets/asmamaw.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaUpwork } from "react-icons/fa6";

const Banner = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div
      id="home"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-[#f0f0f0]">
        <h1
          data-aos="fade-right"
          className="text-[36px] font-bold mb-6 leading-tight uppercase tracking-wide"
        >
          Hey, I'm <span className="text-fuchsia-500">Asmamaw Kassahun</span>
        </h1>
        <p data-aos="fade-left" className="max-w-lg text-lg leading-relaxed">
          I’m a Computer Science student passionate about building practical and
          creative tech solutions. My journey into coding has led me to explore
          various aspects of software development, from frontend interfaces to
          backend logic. Dive into my projects and get to know more about what I
          do!
        </p>
        <div className="flex mt-10 gap-4">
          <div className="flex items-center justify-center">
            <div className="flex space-x-3">
              <a
                target="_blank"
                href="https://github.com/Asmamaw-cloud"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full transition-transform duration-200 transform hover:scale-110 p-2"
              >
                <AiFillGithub className="text-[32px]" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/asmamawkassahun"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full transition-transform duration-200 transform hover:scale-110 p-2"
              >
                <FaLinkedin className="text-[32px]" />
              </a>
              <a
                target="_blank"
                href="https://x.com/AsmamawKassahu4"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full transition-transform duration-200 transform hover:scale-110 p-2"
              >
                <FiTwitter className="text-[32px]" />
              </a>
              <a
                target="_blank"
                href="https://www.upwork.com/freelancers/~0175e884586c28ac2d"
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full transition-transform duration-200 transform hover:scale-110 p-2"
              >
                <FaUpwork className="text-[32px]"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src={img}
        width={290}
        height={290}
        className="rounded-full border-4 border-fuchsia-500 p-2 img_glow shadow-lg"
        alt="Profile"
      />
    </div>
  );
};

export default Banner;
