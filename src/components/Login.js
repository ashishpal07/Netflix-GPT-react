import { useState } from "react";
import { BG_URL } from "../utils/constant";
import { Header } from "./Header";

export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const isSignInFormHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="Background_Image" />
      </div>

      <form className="flex absolute w-4/12 mx-auto left-0 right-0 mt-20 shadow-lg bg-black rounded-lg opacity-80">
        <div className="flex flex-col w-full items-center py-10 rounded-lg">
          <h1 className="font-bold text-white text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

          {!isSignInForm && (<input
            className="m-5 p-4 border-[1px] border-slate-500 bg-black rounded-md w-9/12"
            type="email"
            placeholder="Full Name"
          />)}

          <input
            className="m-5 p-4 border-[1px] border-slate-500 bg-black rounded-md w-9/12"
            type="email"
            placeholder="Email Address"
          />

          <input
            className="m-5 p-4 border-[1px] border-slate-500 bg-black rounded-md w-9/12"
            type="password"
            placeholder="Password"
          />

          <button className="mt-10 p-2 bg-red-600 text-white rounded-md w-9/12">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white mt-5">
            {isSignInForm ? "New to Netflix?" : "Already Register?"}
            <span className="font-bold cursor-pointer hover:underline" onClick={isSignInFormHandler}>
            {isSignInForm ? "Sign In Now." : "Sign Up Now."}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
