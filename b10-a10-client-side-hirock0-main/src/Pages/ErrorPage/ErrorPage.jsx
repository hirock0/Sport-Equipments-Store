import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
      <Fade direction="down" cascade damping={0.2}>
        <h1 className="text-8xl md:text-9xl font-extrabold text-gray-900">
          404
        </h1>
      </Fade>

      <Fade direction="up" cascade damping={0.2}>
        <p className="text-xl md:text-2xl mt-4 text-gray-600 text-center">
          We can't find the page you're looking for.
        </p>
      </Fade>

      <Fade direction="up" delay={300}>
        <div className="mt-6 text-blue-600 text-6xl">
          <FaHome />
        </div>
      </Fade>

      <Fade direction="up" delay={500}>
        <a
          href="/"
          className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition duration-300"
        >
          <FaHome className="text-white text-xl" />
          <span>Back to Home</span>
        </a>
      </Fade>
    </div>
  );
};

export default ErrorPage;
