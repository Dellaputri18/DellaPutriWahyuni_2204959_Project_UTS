import { React, useState, useEffect } from "react";
import LoadingAnimation from "../LoadingAnimation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Thriftnstash = ({ windowWidth }) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingGIF, setLoadingGIF] = useState(true);
  const imageSrc = "cimits.jpg";
  const animationSrc = "cimits.jpg";
  useEffect(() => {
    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      setLoadingImage(false);
    };
  }, [imageSrc]);
  useEffect(() => {
    const image = new Image();
    image.src = animationSrc;

    image.onload = () => {
      setLoadingGIF(false);
    };
  }, [animationSrc]);
  return (
    <div
      id="project_5"
      className="flex flex-row flex-wrap justify-center gap-20 content-center"
    >
      <div
        id="previewProject-thriftnstash"
        className="sm:w-2/5 flex flex-col justify-center gap-5 content-center relative transition-all duration-300"
        onMouseEnter={(e) => {
          if (windowWidth.current >= 640) {
            if (loadingImage == false) {
              e.currentTarget
                .querySelector("#preview-gif")
                .classList.toggle("opacity-0");
              e.currentTarget
                .querySelector("#preview-png")
                .classList.toggle("opacity-0");
            }
          }
        }}
        onMouseLeave={(e) => {
          if (windowWidth.current >= 640) {
            if (loadingImage == false) {
              e.currentTarget
                .querySelector("#preview-gif")
                .classList.toggle("opacity-0");
              e.currentTarget
                .querySelector("#preview-png")
                .classList.toggle("opacity-0");
            }
          }
        }}
      >
        <div id="preview-png" className="text-center">
          {loadingImage ? (
            <>
              <span className="text-sm text-gray-500 font-semibold text-center">
                Loading Image
              </span>
              <LoadingAnimation />
            </>
          ) : (
            <LazyLoadImage effect="blur" src={"cimits.jpg"} />
          )}
        </div>
        <div
          id="preview-gif"
          className="opacity-0 absolute top-1/4 self-center transition-all duration-300"
        >
          {loadingGIF ? (
            <>
              <span className="text-sm text-gray-500 font-semibold">
                Loading Gif
              </span>
              <LoadingAnimation />
            </>
          ) : (
            <LazyLoadImage src={"cimits.jpg"} />
          )}
        </div>
        <button
          className="justify-self-center block sm:hidden self-center px-3 py-1 bg-blue-600 text-white text-sm text-center rounded-lg"
          onClick={(e) => {
            e.currentTarget.parentElement
              .querySelector("#preview-gif")
              .classList.toggle("opacity-0");
            e.currentTarget.parentElement
              .querySelector("#preview-png")
              .classList.toggle("opacity-0");
          }}
        >
          PREVIEW
        </button>
      </div>

      <div className="sm:w-2/5 flex flex-col justify-center sm:gap-8">
        <div className="font-bold text-center text-sm  mb-2">
          MY FRIENDS
        </div>
        <div className="text-center text-gray-700 ">
        Thank you to my friend who has been a great help throughout my academic journey. Your support has been invaluable, and I truly appreciate all the assistance you've provided during my college years.
        </div>
      </div>
    </div>
  );
};
export default Thriftnstash;
