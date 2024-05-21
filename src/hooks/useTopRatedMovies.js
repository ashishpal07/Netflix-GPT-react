import { useDispatch } from "react-redux";
import { addTpoRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const dataJson = await data.json();
    dispatch(addTpoRatedMovies(dataJson.results));
  };
};

export default useTopRatedMovies;
