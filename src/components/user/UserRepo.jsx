import React from "react";
import { useParams } from "react-router-dom";
const UserRepo = ({repo}) => {
  const {login}=useParams()
  return (
    <a href={`https://github.com/${login}/${repo.name}`} className="w-full cursor-pointer py-2 md:py-4 px-6 md:w-2/3 border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-[12px]">
      <p className="text-gray-400 block font-semibold">{repo.name}</p>
    </a>
  );
};

export default UserRepo;
