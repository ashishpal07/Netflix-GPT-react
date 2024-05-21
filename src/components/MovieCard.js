import React from "react";
import { PHOTO_URL } from "../utils/constant";

const MovieCard = ({ movieDetails }) => {
  return (
    <div className="w-52 pr-3">
      <img src={PHOTO_URL + movieDetails?.backdrop_path} alt="movie photo" />
    </div>
  );
};

export default MovieCard;
