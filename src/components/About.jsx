const About = () => {
  return (
    <section
      id="about"
      className="mt-12 p-10 flex flex-col md:flex-row items-center md:gap-16"
    >
      <div className="w-full md:w-[50%]">
        <h2
          className="text-3xl md:text-4xl font-bold text-cyan-500 tracking-normal mb-4"
          data-aos="fade-in"
        >
          Who we are
        </h2>
        <p
          className="text-gray-300 text-lg font-light tracking-wider leading-relaxed mb-2"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          We are a small team of passionate developers and designers building
          sleek, high performance websites. With precision, creativity, and
          speed, we help brands stand out in the digital space.
        </p>
        <p
          className="hidden md:inline text-gray-300 text-lg font-light tracking-wider leading-relaxed"
          data-aos="fade-in"
        >
          Whether you're launching a product, showcasing your portfolio, or
          scaling your business, we bring clarity, speed, and a bold digital
          presence to your vision. Dexign is were modern ideas meet thoughtful
          execution.
        </p>
      </div>
      <div className="w-full md:w-[50%]">
        <img
          src="/about.svg"
          className=" w-full hidden md:inline md:h-[35rem] rounded-lg"
          data-aos="fade-in"
        />
      </div>
    </section>
  );
};

export default About;
