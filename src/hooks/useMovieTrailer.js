import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { API_OPTIONS, TMDB_MOVIE_BY_ID } from "../utils/constant";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieVideos();
  }, []);

  const fetchMovieVideos = async () => {
    const videosData = await fetch(
      TMDB_MOVIE_BY_ID + movie_id + "/videos",
      API_OPTIONS
    );

    const jsonVideoData = await videosData.json();
    const filterVideosData = jsonVideoData.results.filter(
      (data) => data.type === "Trailer"
    );
    const trailer =
      filterVideosData.length === 0 ? jsonVideoData[0] : filterVideosData[0];
    dispatch(addMovieTrailer(trailer));
  };
};

export default useMovieTrailer;
