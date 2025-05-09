import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import GptAssistent from "./GptAssistent";


const MovieListConatainer = () => {
    const nowPlayingMovies = useSelector((state) => state.movies?.nowPlayingMovies);
    const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies);
    const popularMovies = useSelector((state) => state.movies?.popularMovies);
    const upcomingMovies = useSelector((state) => state.movies?.upcomingMovies);

    
    return (
        <div className=" absolute mt-180 w-screen  px-3 m-2 bg-gradient-to-b from black to-red-950 ">
        <h1 className=" text-3xl text-white px-5 py-5 bg-gradient-to-t from-black">Now Playing Movies</h1>
        <MovieList movielist = {nowPlayingMovies}/>
        <h1 className=" text-3xl text-white  px-5 pt-5 ">Top Rated Movies</h1>
        <MovieList movielist = {topRatedMovies}/>
        <h1 className=" text-3xl text-white  px-5 pt-5">Popular Movies</h1>
        <MovieList movielist = {popularMovies}/>
        <h1 className=" text-3xl text-white  px-5 pt-5">Upcoming Movies</h1>
        <MovieList movielist = {upcomingMovies}/>
        <GptAssistent/>
        </div>
    );

}

export default MovieListConatainer;