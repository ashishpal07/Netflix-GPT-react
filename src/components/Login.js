import { useState, useRef } from "react";
import { BG_URL, DEFAULT_AVATAR_URL } from "../utils/constant";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const isSignInFormHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: DEFAULT_AVATAR_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // setIsSignInForm(!isSignInForm);
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "=>" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "=>" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="Background_Image" />
      </div>

      <form
        onClick={(e) => e.preventDefault()}
        className="flex absolute w-4/12 mx-auto left-0 right-0 mt-20 shadow-lg bg-black rounded-lg opacity-80"
      >
        <div className="flex flex-col w-full items-center py-10 rounded-lg">
          <h1 className="font-bold text-white text-2xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              className="m-5 p-4 border-[1px] border-slate-500 bg-black rounded-md w-9/12 text-white"
              type="email"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            className="m-5 p-4 border-[1px] border-slate-500 bg-black rounded-md w-9/12 text-white"
            type="email"
            placeholder="Email Address"
          />

          <input
            ref={password}
            className="m-5 p-4 border-[1px] border-slate-500 bg-black rounded-md w-9/12 text-white"
            type="password"
            placeholder="Password"
          />

          <p className="text-red-600">{errorMessage}</p>

          <button
            className="mt-10 p-2 bg-red-600 text-white rounded-md w-9/12"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white mt-5">
            {isSignInForm ? "New to Netflix?" : "Already Register?"}
            <span
              className="font-bold cursor-pointer hover:underline"
              onClick={isSignInFormHandler}
            >
              {isSignInForm ? "Sign Up First." : "Sign In Now."}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
