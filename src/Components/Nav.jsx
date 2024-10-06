import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-10 sm:p-20">
        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <Link to="home" spy={true} smooth={true} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <Link to="about" spy={true} smooth={true} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <Link to="services" spy={true} smooth={true} onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <Link to="projects" spy={true} smooth={true} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
          <Link to="contact" spy={true} smooth={true} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="h-[8vh] lg:h-[10vh] flex justify-between items-center z-50 text-white pl-2 sm:pl-4 lg:pl-6 pr-4 sm:pr-8 lg:pr-20 py-3 lg:py-4 border-b border-slate-800 bg-slate-900 transition-all">
        <div className="flex items-center">
          <h1 className="text-[4vw] sm:text-3xl lg:text-3xl font-bold tracking-widest uppercase logo-font text-fuchsia-600 drop-shadow-[2px_2px_8px_rgba(236,72,153,1)]">
            Asmamaw
          </h1>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="lg:flex hidden items-center space-x-6 sm:space-x-8">
          <ul className="flex gap-4 sm:gap-8 text-[3vw] sm:text-[18px]">
            <li className="hover:text-fuchsia-600 transition-all border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">
              <Link spy={true} smooth={true} to="home">
                Home
              </Link>
            </li>
            <li className="hover:text-fuchsia-600 transition-all border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">
              <Link spy={true} smooth={true} to="about">
                About
              </Link>
            </li>
            <li className="hover:text-fuchsia-600 transition-all border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">
              <Link spy={true} smooth={true} to="services">
                Services
              </Link>
            </li>
            <li className="hover:text-fuchsia-600 transition-all border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">
              <Link spy={true} smooth={true} to="projects">
                Projects
              </Link>
            </li>
            <li className="hover:text-fuchsia-600 transition-all border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">
              <Link spy={true} smooth={true} to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          {click && content}
          <button className="transition" onClick={handleClick}>
            {click ? (
              <FaTimes className="text-3xl text-fuchsia-500" />
            ) : (
              <CiMenuFries className="text-3xl text-fuchsia-500" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
