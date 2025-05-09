
import  {API_OPTIONS} from "../assets/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addTopRatedMovie } from "../assets/MovieSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const TopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addTopRatedMovie(movies.results));
    }
    useEffect(() => {
        TopRatedMovies();
    }, []);

    
}
export default useTopRatedMovies;