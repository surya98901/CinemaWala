import Header from "./Header";

import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import MovieListConatainer from "./MovieListContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  const gptSearch = useSelector((state) => state.gpt?.showGptSearch);

  if (!movies) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <Header UserSignedIn={true} />
      {gptSearch ? (<GptSearch />) :
       (<div className="browse flex flex-col h-screen bg-gradient-to-b from-black to-red-900">
        <VideoContainer movie={movies[4]} />
        <MovieListConatainer />
      </div>)}
    </>
  );
};
export default Browse;
