import  {API_OPTIONS} from "../assets/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addMovie } from "../assets/MovieSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const NowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addMovie(movies.results));
    }
    useEffect(() => {
        NowPlayingMovies();
    }, []);

    
}
export default useNowPlayingMovies;