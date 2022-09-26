import React, { useState } from "react";
import logo from "../assets/githubLogo.png";
import { Link } from "react-router-dom";

const Home = () => {
    const [show,setShow]=useState(false)
  return (
    <section>
      <button className="block items-center py-2 mx-auto px-12 my-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
        Clear
      </button>
      <div className="container flex flex-wrap justify-center py-[14.4px] gap-6 md:mx-auto md:justify-start md:px-[88px]">
        <div className="w-[250px]  p-6 border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-[25px]">
          <div className="flex flex-col items-center text-center mx-auto space-y-6">
            <img
              src={logo}
              className="max-w-[76.6px] max-h-[76.6px] rounded-full"
              alt="User image"
            />
            <div>
              <h5 className="mb-1 text-xl font-medium text-center text-gray-900 dark:text-white">
                zkfjze
              </h5>
              <Link
                to={"/"}
                className="block items-center py-2 mt-3 px-4 w-28 mx-auto text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      {show && <div className="container flex justify-center items-center mt-[150px] mx-auto ">
        <h1 className="text-gray-400 text-center text-2xl font-bold md:text-5xl">
          Search For Users In Github
        </h1>
      </div>}
    </section>
  );
};

export default Home;
