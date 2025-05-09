

import  {API_OPTIONS} from "../assets/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addUpcomingMovie } from "../assets/MovieSlice";

const useUpcomingMovie = () => {

    const dispatch = useDispatch();
    const UpComingMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addUpcomingMovie(movies.results));
    }
    useEffect(() => {
        UpComingMovie();
    }, []);

    
}
export default useUpcomingMovie;