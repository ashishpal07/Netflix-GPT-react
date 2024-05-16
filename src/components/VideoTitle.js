import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";


export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-44 px-12 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-xl text-white">{title}</h1>
      <p className="w-1/4 mt-3 text-sm text-white">{overview}</p>
      <div className="mt-4 flex">
        <button className="bg-white text-black py-2 px-5 flex items-center rounded-md hover:bg-opacity-80">
          <FaPlay className="mr-2" /> Play Now
        </button>
        <button className="bg-black opacity-55 text-white py-2 px-5 flex items-center rounded-md ml-3 hover:bg-opacity-50 hover:bg-white">
          <IoInformationCircleOutline className="mr-2 text-xl" /> More Info
        </button>
      </div>
    </div>
  );
};
