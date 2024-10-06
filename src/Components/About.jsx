import img from "../assets/asmamaw.jpg";
import resume from "../assets/resume.pdf";

const About = () => {
  return (
    <div
      id="about"
      className="lg:px-28 px-4 py-10 lg:py-24 flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 text-center lg:text-left bg-gradient-to-b from-gray-800 via-gray-900 to-black"
    >
      <img
        data-aos="zoom-in"
        src={img}
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-fuchsia-500 shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
        alt="Asmamaw Kassahun"
      />
      <div className="lg:w-1/2 sm:w-1/2 flex flex-col justify-center items-center lg:items-start text-white space-y-4 lg:space-y-6">
        <h1
          data-aos="fade-right"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-fuchsia-500 uppercase"
        >
          About Me
        </h1>
        <p
          data-aos="fade-left"
          className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wide px-4 sm:px-8 lg:px-0"
        >
          I’m a passionate developer with expertise in both frontend and backend
          technologies. My focus is on creating web applications that are not
          only functional but also visually appealing and easy to use.
        </p>
        <p
          data-aos="fade-left"
          className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wide px-4 sm:px-8 lg:px-0"
        >
          My journey has empowered me to take on various challenges, from
          building seamless user interfaces with React to designing robust
          backend systems with Node.js. I thrive in making sure every part of
          the development process enhances user experience.
        </p>
        <p
          data-aos="fade-left"
          className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-wide px-4 sm:px-8 lg:px-0"
        >
          Beyond web development, my passion for ethical hacking keeps me
          focused on creating secure applications. Continuously improving my
          skills in security helps me ensure that the systems I build are
          reliable and safe.
        </p>
        <button className="mt-4 md:mt-6 px-4 sm:px-6 py-2 md:py-3 bg-fuchsia-500 text-white font-semibold rounded-lg shadow-lg hover:bg-fuchsia-600 transition-all duration-300 transform hover:scale-105">
          <a href={resume} target="_blank">View Resume</a>
        </button>
      </div>
    </div>
  );
};

export default About;
