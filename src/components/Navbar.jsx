import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const Links = [
    { name: "Home", to: "/#hero" },
    { name: "About", to: "/#about" },
    { name: "Projects", to: "/#projects" },
    { name: "Contact", to: "/#contact" },
  ];

  const [isOpen, setisOpen] = useState(false);
  return (
    <nav
      className="w-full px-6 py-4 flex items-center justify-between backdrop-blur-lg bg-white/5 border-b border-white/10 fixed top-0 z-100"
      data-aos="fade-down"
    >
      <h1 className="text-cyan-500 font-bold text-3xl md:text-4xl">Dexign</h1>

      <ul className="hidden md:flex items-center gap-6">
        {Links.map((Link, index) => (
          <li key={index}>
            <a
              href={Link.to}
              className="text-white text-md font-light hover:text-cyan-500 transition"
            >
              {Link.name}
            </a>
          </li>
        ))}
      </ul>
      {isOpen ? (
        <ul
          className=" md:hidden w-full px-6 py-4 flex flex-col  gap-6  backdrop-blur-lg bg-[#0a0f1c]/60 border-b border-white/10 fixed top-17 left-0 z-100 transform transition-transform duration-500 ease-in-out translate-x-0"
          data-aos="slide-down"
          data-aos-duration="300"
        >
          {Links.map((Link, index) => (
            <li key={index}>
              <a
                href={Link.to}
                onClick={() => setisOpen(false)}
                className="text-white text-md font-light hover:text-cyan-500 transition"
              >
                {Link.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}

      <div className="flex flex-row gap-3 justify-center items-center">
        <a
          href="/#hire"
          onClick={() => setisOpen(false)}
          className="tracking-wide font-medium text-sm text-white md:text-md px-4 py-1.5 bg-cyan-400 hover:bg-cyan-300 hover:shadow-cyan-300 shadow-sm cursor-pointer rounded-lg transition-all duration-300"
        >
          Hire Us
        </a>

        <FaBars
          className="md:hidden text-white text-lg cursor-pointer"
          onClick={() => setisOpen(!isOpen)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
