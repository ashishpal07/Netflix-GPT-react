import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const dataJson = await data.json();
    dispatch(addPopularMovies(dataJson.results));
  };
};

export default usePopularMovies;
