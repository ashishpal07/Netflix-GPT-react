import React, { useEffect } from "react";
import { LOGO } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  };

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser(user));
        navigate("/");
      }

      return () => unsuscribe();
    });
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && <div className="flex w-[150px] p-2 justify-between">
        <img
          className="w-10 h-10 rounded-md"
          src={user.photoURL}
          alt="avatar-user"
        />
        <button 
          onClick={signOutHandler} 
          className="font-bold text-sm text-white rounded-lg bg-red-500 p-2 w-25 h-10"
        >
          sign out
        </button>
      </div>}
    </div>
  );
};
