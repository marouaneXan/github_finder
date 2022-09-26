import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center h-[58vh] space-y-8">
      <h1 className="text-gray-400 text-center text-2xl font-bold md:text-5xl">
        Page Not found
      </h1>
      <Link
      to={'/'}
          className="block items-center py-2 mx-auto px-12 my-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
        >
          Go Home
        </Link>
    </div>
  );
};

export default NotFound;
