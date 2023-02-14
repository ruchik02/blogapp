
import React from "react";
// import { Link} from "react-router-dom";

function Blog() {
  return (
    <>
      <div className=" my-3 hover:scale-[110%] transform transition ease-in-out delay-150 py-2 px-6 border-l-8 border-[#00B0FF]  break-words bg-white rounded-md text-gray-700 shadow-xl flex flex-col justify-center items-center ">
        <div className="w-full flex gap-2 justify-between items-center border-spacing-3 text-left border-b-2 py-3 border-[indigo-500]">
          <h2 className="text-2xl w-[60%] font-sans font-semibold text-gray-700">
            title
          </h2>
              {/* <Link> */}
                <button className="material-symbols-outlined  border hover:shadow-[#34d399] hover:border-none text-[#34d399] text-md rounded-full hover:shadow-md p-1 hover:border-2 border-[#dcfce7]">
                  edit
                </button>
              {/* </Link> */}
              <button
                className="material-symbols-outlined  hover:border-2 border-0 text-red-400 text-md rounded-full hover:shadow-sm p-1  "
              >
                delete
              </button>
          <h1 className="text-3xl font-bold ">hello</h1>
        </div>

        <p
          className="py-5 text-xl w-full font-sans flex justify-start item-left"
          
        >
          <span>byeee</span>
        </p>
        <div className="flex justify-between w-full">
          <span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest">
            hii
          </span>
                <button
                  className="inline-block py-1 px-2 rounded bg-[#dcfce7] text-[#42ad86f4] text-xs font-medium hover:bg-[#34d399] hover:text-white tracking-widest"
                >
                  Publish
                </button>
                <span className="inline-block py-1 px-2 rounded bg-gray-200 text-gray-500 text-xs font-medium   tracking-widest">
                  Published
                </span>
          {/* <Link> */}
            <button className="text-[#00B0FF] ">Read More</button>
          {/* </Link> */}
        </div>
      </div>

    </>
  );
}

export default Blog;
