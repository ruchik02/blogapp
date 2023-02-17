import React from "react";
import Link from "next/link";


export const Header = () => {
  return (
    <div className="shadow-sm w-full sticky top-0 left-0">
      <div className="sm:flex items-center justify-between bg-white py-4 sm:px-10 px-7 border-2 border-b-blue-500">
        {/* Title and link to home page */}
        <Link href="/">
          <h2 className="text-2xl sm:text-3xl text-blue-500 font-semibold">
            My Blog
          </h2>
        </Link>
        <span
          className="z-50 absolute top-5 right-8 sm:hidden text-2xl cursor-pointer"
        >
          &#9776;
        </span>
        {/* Links  */}
        <ul
          className="border-2 border-b-blue-500 sm:border-0 sm:flex sm:items-center sm:pb-0 pb-2 absolute sm:static bg-white sm:z-auto z-[-1] left-0 w-full sm:w-auto sm:pl-0 pl-9 transition-all duration-300 ease-in "
        >
          <Link href="/login" >
            <li className="my-4 px-2 hover:text-blue-500">Log in</li>
          </Link>
          <Link href="/signup" >
            <li className="my-4 px-2 hover:text-blue-500">Sign up</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
