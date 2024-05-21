import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const dataJson = await data.json();
    dispatch(addUpcomingMovies(dataJson.results));
  };
};

export default useUpcomingMovies;
