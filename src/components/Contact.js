import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-500 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
        
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/3e309903-3590-4024-a300-5a6effd0310e"
            method="post"
            className="flex flex-col w-full md:w-1/2 "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md
                  text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md
                  text-white focus:outline-none"
            />
            <textarea
              name="Message"
              placeholder="Enter Your Message"
              cols="30"
              rows="10"
              className="p-2 
                  bg-transparent border-2 rounded-md text-white focus:outline-none "
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center
                  rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
