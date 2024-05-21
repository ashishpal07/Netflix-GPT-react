import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-10 pt-4">
      <h1 className="font-bold text-2xl pb-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} movieDetails={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
