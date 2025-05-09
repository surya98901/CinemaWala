
import  {API_OPTIONS} from "../assets/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addPopularMovie } from "../assets/MovieSlice";

const useNowPopularMovies = () => {

    const dispatch = useDispatch();
    const PopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addPopularMovie(movies.results));
    }
    useEffect(() => {
        PopularMovies();
    }, []);

    
}
export default useNowPopularMovies;