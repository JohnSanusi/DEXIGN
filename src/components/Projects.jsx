import React from "react";

const Projects = () => {
  const projects = [
    {
      preview: "/ezzygabby-preview.PNG",
      name: " EzzyGabby Photography",
      description:
        "  A minimalist and modern portfolio site built to showcase creative work in a clean, distraction-free layout. Designed to reflect the photographer's visual style and provide a seamless browsing experience ",
      link: {
        live: "https://ezzygabby.vercel.app",
      },
    },
    {
      preview: "/lumea-preview.PNG",
      name: "Lumea Collections",
      description:
        " A sleek and modern e-commerce website built for a startup and small brand to sell products online with ease. Designed with a minimalist layout and smooth navigation to deliver a seamless shopping experience for customers",
      link: {
        live: "https://lumeax.vercel.app",
      },
    },
    {
      preview: "/sarahxplace-preview.PNG",
      name: "Sarah's Place",
      description:
        " A demo resturant website built to showcase a modern and appetizing design. Crafted with a clean layout and smooth navigation to highlight meals, menus, and reservations in an engaging way",
      link: {
        live: "https://sarah-xplace.vercel.app",
      },
    },
    {
      preview: "/real-connect-preview.PNG",
      name: "Real Connect - Real Estate",
      description:
        " A demo real estate website designed to display property listings in a clean, modern layout. Built to simulate a real-world property platform with smooth navigation and an intuitive browsing experience for users.",
      link: {
        live: "https://real-connect-seven.vercel.app",
      },
    },
    {
      preview: "/swift-magnate-preview.PNG",
      name: "Swift Magnate Solicitors",
      description:
        " A demo law firm website built to showcase a professional and trustworthy online presence. Designed with a clean, corporate layout to highlight legal services, team profiles, and engagement sections",
      link: {
        live: "https://swift-magnate-solicitors.vercel.app",
      },
    },
    {
      preview: "/easybuy-preview.PNG",
      name: " Easy Buy",
      description:
        " A demo e-commerce website buily to showcase a clean and user friendly shopping interface. Designrd with a simple layout and smooth product browsing experience to simulate a modern online store.",
      link: {
        live: "https://easy-buy-silk.vercel.app",
      },
    },
  ];
  return (
    <section id="projects" className=" p-6 flex flex-col">
      <div className="relative" data-aos="fade-down" data-aos-duration="1000">
        <h2
          className="text-3xl md:text-4xl font-bold text-cyan-500 tracking-normal mb-5"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          Recent Work
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {projects.map((project, index) => (
          <div
            className="bg-gray-900 rounded-lg p-4 shadow-md border border-white/10 backdrop-blur-sm flex flex-col gap-2 md:gap-3 w-full max-w-sm h-auto md:h-1-0"
            data-aos="fade-in"
            data-aos-duration="1000"
            key={index}
          >
            {/*  Project image*/}
            <img src={project.preview} className="w-full h-auto" />

            {/*  Project title*/}
            <h3 className="text-xl font-bold">{project.name}</h3>

            {/*  Project description*/}
            <p className="text-sm">{project.description}</p>

            {/*  Project live link*/}
            <div className="flex gap-4 mt-auto">
              <a
                href={project.link.live}
                target="_blank"
                className="text-base  bg-cyan-600 text-white font-light px-3 py-1 rounded-md shadow-md hover:bg-cyan-500 hover:shadow-cyan-600 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
