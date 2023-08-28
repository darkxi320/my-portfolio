import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className=" text-xl mt-15">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>

        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure
          optio aliquid nulla. Ea qui voluptatum rerum unde sit neque sed ullam
          rem ipsa odit quisquam officia molestiae placeat quae minima quam
          voluptatibus autem eos vel odio magnam illum officiis, maxime
          cupiditate. Ea culpa hic non cumque! Assumenda, enim qui?
        </p>
      </div>
    </div>
  );
};

export default About;
