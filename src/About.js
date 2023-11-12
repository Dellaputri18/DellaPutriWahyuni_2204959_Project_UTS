import { React } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const About = () => {
  return (
    <div
      id="about-page"
      className="flex flex-row sm:h-screen gap-14 flex-wrap justify-center content-between sm:content-center px-5 sm:px-10 py-20 sm:py-0"
    >
      <div className="sm:w-2/6 flex align-middle content-center flex-wrap">
        <LazyLoadImage
          effect="blur"
          src={"me.jpg"}
          className="rounded-xl h-fit transition-all duration-300"
        />
      </div>
      <div className="sm:w-2/5 ">
        <div className="text-blue-500 font-extrabold text-xs mb-2 tracking-wider">
          ABOUT ME
        </div>
        <div className="text-xl font-extrabold mb-6">
        A Computer Science Student
        </div>
        <div className=" text-gray-700 tracking-tight">
          Hello, I'm Della Putri Wahyuni, I am highly enthusiastic about learning various data analysis methods and the latest technologies that can be used to process and interpret information effectively.
        </div>
      </div>
    </div>
  );
};

export default About;
