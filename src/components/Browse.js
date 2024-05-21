import useLatestMovies from "../hooks/useLatestMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { Header } from "./Header";
import { MainMovieContainer } from "./MainMovieContainer";
import { MovieListContainer } from "./MovieListContainer";

export const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useLatestMovies();

  return (
    <div>
      <Header />
      <MainMovieContainer />
      <MovieListContainer />
    </div>
  );
};
