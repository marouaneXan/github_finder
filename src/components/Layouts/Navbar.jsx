import React from "react";
import logo from "../../assets/githubLogo.png";
import { Link,useLocation } from "react-router-dom";
import SearchUser from "../user/SearchUser";
const Navbar = () => {
    const location=useLocation()
  return (
    <nav className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={logo}
            alt="github logo"
            className="rounded-full w-[50px] h-[50px] cursor-pointer"
          />
        </Link>
        {location.pathname !== "/" ? (
          <Link
            to="/"
            className="block items-center py-2 mt-2 px-[18px] md:px-[38px] text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Back To Home
          </Link>
        ) : (
          <SearchUser/>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
