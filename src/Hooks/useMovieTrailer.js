import { useDispatch } from "react-redux";
import { addTrailer } from "../assets/MovieSlice";
import { API_OPTIONS } from "../assets/constants";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const getMovieVideo = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    console.log(data)
    const movieTraileronly =  data.results.filter(item => item.type === "Trailer");
    console.log(movieTraileronly)
    dispatch(addTrailer(movieTraileronly[0]));
  };

  useEffect(() => {
    getMovieVideo(id); // <-- you provide the id here
  }, []);
};

export default useMovieTrailer;