import React from "react";
import {Link} from 'react-router-dom'
const UserCard = ({user}) => {
  return (
    <>
      <div className="w-[250px]  p-6 border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-[25px]">
        <div className="flex flex-col items-center text-center mx-auto space-y-6">
          <img
            src={user.avatar_url}
            className="max-w-[76.6px] max-h-[76.6px] rounded-full"
            alt="User image"
          />
          <div>
            <h5 className="mb-1 text-xl font-medium text-center text-gray-900 dark:text-white">
              {user.login}
            </h5>
            <Link
              to={`profile/${user.login}`}
              className="block items-center py-2 mt-3 px-4 w-28 mx-auto text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
