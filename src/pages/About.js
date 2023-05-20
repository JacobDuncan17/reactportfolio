import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-yellow-700 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm an enthusiastic web developer with a strong focus on the MERN (MongoDB, Express.js, React.js, Node.js) stack. I recently completed a comprehensive bootcamp where I gained hands-on experience and expertise in building full-stack applications using these technologies. Throughout the bootcamp, I honed my skills in frontend development with React.js, backend development with Node.js and Express.js, and database management with MongoDB. I'm excited to leverage my knowledge of the MERN stack to create dynamic and interactive web applications that deliver exceptional user experiences.
        </p>

        <br />

      </div>
    </div>
  );
};

export default About;
