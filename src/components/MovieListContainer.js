import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const MovieListContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovieList = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovieList = useSelector(
    (store) => store.movies?.topRatedMovies
  );
  const upcomingMovieList = useSelector(
    (store) => store.movies?.upcomingMovies
  );
  const latestMovieList = useSelector((store) => store.movies?.latestMovies)
  console.log(latestMovieList);

  return (
    nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-[260px] relative z-20">
          <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={popularMovieList} />
          <MovieList title={"Top Rated Movies"} movies={topRatedMovieList} />
          <MovieList title={"Upcoming Movies"} movies={upcomingMovieList} />
          <MovieList title={"Latest Movies"} movies={latestMovieList} />
        </div>
      </div>
    )
  );
};
