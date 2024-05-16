import React from "react";
import { VideoPlayBackground } from "./VideoPlayBackground";
import { VideoTitle } from "./VideoTitle";
import { useSelector } from "react-redux";

export const MainMovieContainer = () => {
  const movieList = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movieList) return;

  const mainMovie = movieList[0];
  const { original_title, overview } = mainMovie;
  
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoPlayBackground movie_id={mainMovie.id} />
    </div>
  );
};
