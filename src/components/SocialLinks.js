import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} /> Linkedin
        </>
      ),
      href: "https://linkedin.com/in/jacob-duncan-73709121a",
      style: "rounded-tl-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} /> GitHub 
        </>
      ),
      href: "https://github.com/jacobduncan17",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} /> Mail 
        </>
      ),
      href: "mailto:jake.brown.duncan@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} /> Resume 
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-bl-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[70%] right-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml bg-gradient-to-l from-black via-black to-yellow-700" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
