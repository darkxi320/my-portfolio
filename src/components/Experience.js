import React from "react";
import css from "../assets/icons/css.png";
import html from "../assets/icons/html.png";
import js from "../assets/icons/js.png";
import tailwind from "../assets/icons/tailwind.png";
import reactjs from "../assets/icons/reactjs.png";
const Experience = () => {
  const tech = [
    {
      id: 1,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: js,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: reactjs,
      title: "React",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white  ">
        <div >
          <p className="text-4xl font-bold p-2 inline border-b-4 border-gray-500 ">
            Experience
          </p>
          <p className="py-6">On these technologies, i have worked on</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="Html" className="w-20 mx-auto" />
              <p> {title} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
