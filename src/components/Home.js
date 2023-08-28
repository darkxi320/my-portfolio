import React from "react";
import {useTypewriter , Cursor} from "react-simple-typewriter";
import heroimg from "../assets/My Picture.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import {Link} from "react-scroll";
function Home() {

  const [text] = useTypewriter({
    words: ['Full Stack Developer', ' UI Designer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 90,
  });
  return (
    <div
      name="Home"
      className="h-screen w-full 
    bg-gradient-to-b from-black via-black to-gray-800
    text-white "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
    items-center justify-center h-full
     px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2
            className=" text-4xl sm:text-7xl font-bold
        text-white "
          >
            I am a <span className="text-4xl sm:text-7xl font-bold text-cyan-300" >{text}</span> 
        <Cursor cursorStyle='!' cursorColor="red" cursorBlinking="20"  />
          </h2>
          <p className=" text-gray-500 py-4 max-w-md ">
            I have a 2+ years of experience building and Desinging softwares, my
            services includes Ui designing as well designing and developing.
          </p>

          <div>
            <Link to="Portfolio" smooth duration={500}
              className="group text-white w-fit px-6 py-3 my-3 
                flex items-center rounded-md 
                bg-gradient-to-r from-cyan-500 to-blue-500 
                cursor-pointer"
            >
              Portfolio
              <span
                className="group-hover:rotate-90 
                    duration-300"
              >
                <BsArrowRightShort size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroimg}
            
            height={250}
            width={250}
            alt="Profile Picture"
            className=" rounded-2xl mx-auto md: w-75  pb-8 ml-8 "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
