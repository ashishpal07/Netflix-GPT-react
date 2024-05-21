import { useDispatch } from "react-redux";
import { addLatestMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useLatestMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getLatestMovies();
  }, []);

  const getLatestMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/latest",
      API_OPTIONS
    );
    const dataJson = await data.json();
    // console.log(dataJson);
    dispatch(addLatestMovies(dataJson.results));
  };
};

export default useLatestMovies;
