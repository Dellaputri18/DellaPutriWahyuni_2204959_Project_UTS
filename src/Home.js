import { React } from "react";

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-center px-5 sm:px-10 content-center ">
      <div className="flex flex-col-reverse sm:flex-row flex-wrap justify-around gap-14 sm:px-20 content-center">
        <div className="flex-initial flex flex-col justify-around w-full sm:w-2/5">
          <div className="text-4xl font-bold tracking-wide mt-10">
            Hello Everyone!
          </div>
          <div className="my-10 mb-4 text-gray-700 tracking-wide flex">
            <span>
              <span>
                I'm{" "}
                <span className="font-extrabold">Della Putri Wahyuni</span>, A student from the University of Education Indonesia with a strong interest in a career as a data analyst and statistician. 
              </span>
              <span className="flex">
                Karawang, Indonesia.
                <img src="logo/location.svg" className="w-6 flex" alt="" />{" "}
              </span>
            </span>
          </div>
        </div>
        <div className="flex-initial w-80 sm:w-96 self-center">
          <img alt={"photo_of_me"} src={"pas_foto.jpg"} />
        </div>
      </div>
    </div>
  );
};
export default Home;
