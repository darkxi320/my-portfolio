import React from "react";
import web1 from "../assets/web1.jpg";
import ui1 from "../assets/ui1.jpg";
import ui2 from "../assets/u2.jpg";
import ui3 from "../assets/ui3.jpg";
import web2 from "../assets/web2.jpg";
import web3 from "../assets/web3.jpg";
import fyp from "../assets/fyp.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: web1,
      title: "NFT-Website",
    },
    {
      id: 2,
      src: ui1,
      title: "Ui-Design",
    },
    {
      id: 3,
      src: ui2,
      title: "Blockchain-Website-Design",
    },
    {
      id: 4,
      src: ui3,
      title: "Doge-Dash",
    },
    {
      id: 5,
      src: web2,
      title: "Restaurent-Website",
    },
    {
      id: 6,
      src: web3,
      title: "Real-Estate",
    },
    {
      id: 7,
      src: fyp,
      title: "Ecommerce-Webstore",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 
    w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 bordern-gray-500 mt-4">
            Portfolio
          </p>
          <p className="py-6">Checkout my Work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200 "
              />
              <p className="mt-20"> {title} </p>
              <div className="flex items-center justify-center ">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
