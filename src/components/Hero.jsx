import { FaCode, FaBolt, FaImage, FaArrowRight } from "react-icons/fa";
const Hero = () => {
  const cards = [
    {
      title: "Clean Code",
      text: "Optimized, maintainable code that scales with your business",
      icon: <FaCode className="font-cyan-600 text-lg font-light" />,
    },
    {
      title: "Custom Design",
      text: "Unique designs tailored to your brand and audience",
      icon: <FaImage className="font-cyan-600 text-lg font-light" />,
    },
    {
      title: "Fast Delivery",
      text: "Quick turnaround without compromising on quality",
      icon: <FaBolt className="font-cyan-600 text-lg font-light" />,
    },
  ];
  return (
    <section id="hero" className="pt-32 md:pt-28 p-8 ">
      <div className="w-full flex flex-col justify-center items-center">
        <span
          className="inline-flex items-center gap-2 px-5 py-2  rounded-full border border-cyan-700/40 bg-cyan-500/10 backdrop-blur-md text-sm md:text-md text-cyan-400 font-medium tracking-wide"
          data-aos="fade-in"
        >
          <FaBolt /> Premium Web Design Agency
        </span>

        <h1
          className="text-3xl md:text-5xl font-extrabold tracking-wide mt-8 text-white leading-tight text-center"
          data-aos="fade-in"
        >
          Transform Your <span className="text-cyan-400">Vision</span> 
          <span className="hidden lg:inline">
            <br />
          </span>
          into Digital <span className="text-cyan-400">Reality</span>
        </h1>
        <p
          className="text-md tracking-wider font-light lg:text-lg text-gray-400 max-w-xl x-auto mt-4 text-center"
          data-aos="fade-in"
        >
          We craft innovative, high-performance websites that elevage yout brand
          and drive results. From concept to launch we bring your digital dreams
          to life.
        </p>
        <a
          href="/#hire"
          className="flex flex-row items-center gap-2 text-md mt-5 bg-cyan-600 text-white font-semibold px-5 py-2 rounded-md shadow-md hover:bg-cyan-500 hover:shadow-cyan-600 transition"
          data-aos="fade-in"
        >
          Start your Project <FaArrowRight className=" text-sm mt-0.5 " />
        </a>
        <a
          href="/#projects"
          className="border border-white/20 text-md mt-3 text-white font-semibold tracking-wide px-5 py-2 rounded-md shadow-md transition hover:bg-white/10"
          data-aos="fade-in"
        >
          View Our Work
        </a>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-6 shadow-md border border-white/10 backdrop-blur-sm flex flex-col gap-2 justify-center items-center"
            data-aos="fade-in"
          >
            <span className="flex justify-center items-center px-5 py-3 rounded-lg bg-cyan-400/20 backdrop-blur-lg w-15">
              {card.icon}
            </span>

            <h1 className="text-xl font-bold text-white">{card.title}</h1>
            <p className="text-center text-gray-200 text-lg tracking-wide">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
