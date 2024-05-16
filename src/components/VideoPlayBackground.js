import { useSelector } from "react-redux";
import { YOUTUBE_EMBED } from "../utils/constant";
import useMovieTrailer from "../hooks/useMovieTrailer";

export const VideoPlayBackground = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(movie_id)

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={YOUTUBE_EMBED + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};
