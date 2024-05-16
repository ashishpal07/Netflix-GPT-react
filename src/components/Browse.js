import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { Header } from "./Header";
import { MainMovieContainer } from "./MainMovieContainer";
import { MovieListContainer } from "./MovieListContainer";

export const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {
        /**
         * Main movie container
         *  - video paly
         *  - movieTitle
         * 
         * Secondary Movie container
         *  - Movie rows * n
         *    - movie card * n
         */
      }
      <MainMovieContainer />
      <MovieListContainer />
    </div>
  );
};
