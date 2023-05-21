import React from "react";
import project1 from "../assets/portfolio/TextEditor.png";
import project2 from "../assets/portfolio/Wolfman-2.png";
import project3 from "../assets/portfolio/placeholder2.webp";
import project4 from "../assets/portfolio/Bazaar.png";
import project5 from "../assets/portfolio/GroupProject1.png";
import project6 from "../assets/portfolio/placeholder2.webp";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      codeLink: "https://github.com/JacobDuncan17/Payback",
      deployedLink: "https://payback-pwa.herokuapp.com/",
    },
    {
      id: 2,
      src: project2,
      codeLink: "https://github.com/JacobDuncan17/Payback",
    },
    {
      id: 3,
      src: project3,
    },
    {
      id: 4,
      src: project4,
      codeLink: "https://github.com/RoboTom01/Hogar_Bazaar",
      deployedLink: "https://hogar-bazaar.herokuapp.com/login",
    },
    {
      id: 5,
      src: project5,
      codeLink: "https://github.com/JacobDuncan17/GroupProject-1",
      deployedLink: "https://jacobduncan17.github.io/GroupProject-1/",
    },
    {
      id: 6,
      src: project6,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-yellow-700 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-700">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codeLink, deployedLink }) => (
            <div key={id} className="shadow-md bg-black rounded-lg">
              <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </a>
              <div className="flex items-center justify-center">
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
