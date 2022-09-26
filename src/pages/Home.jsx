import React, { useState, useContext } from "react";
import Spinner from "../components/Layouts/Spinner";
import UserCard from "../components/user/UserCard";
import { GithubContext } from "../context/Github";

const Home = () => {
  const { users, loading } = useContext(GithubContext);
  console.log(users);

  return (
    <section>
      {loading && <Spinner />}
      {users.length && (
        <button className="block items-center py-2 mx-auto px-12 my-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
          Clear
        </button>
      )}
      <div className="container flex flex-wrap justify-center py-[14.4px] gap-6 md:mx-auto md:justify-start md:px-[88px]">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
      {!users.length && !loading && (
        <div className="container flex justify-center items-center mt-[150px] mx-auto ">
          <h1 className="text-gray-400 text-center text-2xl font-bold md:text-5xl">
            Search For Users In Github
          </h1>
        </div>
      )}
    </section>
  );
};

export default Home;
