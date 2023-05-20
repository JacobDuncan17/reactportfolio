import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const links = [
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "About",
      url: "/about",
    },
    {
      id: 3,
      text: "Portfolio",
      url: "/portfolio",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl bold ml-2">Portfolio</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, text, url }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={url}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
