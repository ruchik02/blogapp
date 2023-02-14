import React from "react";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import loginImg from "../Images/1.svg";
function Form() {
  const location = useLocation();

  return (
    <>
      <div className="flex justify-around mt-10 px-20  ">
        <div className=" ">
          <img className="h-[500px]" alt="image" src={loginImg} />
        </div>

        {location.pathname === "/login" && <Login/>}
        {location.pathname === "/register" && <SignUp />}
      </div>
    </>
  );
}

export default Form;
