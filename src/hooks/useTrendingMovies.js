import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useDispatch } from 'react-redux';


const useTrendingMovies = () => {

    const dispatch = useDispatch();

    const getTrendingMovies = async () => {
      const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?page=1", TMDB_OPTIONS)
      const json = await response.json();
    //   console.log(json.results);
      dispatch(addTrendingMovies(json.results))
    }

    useEffect(() => {
      getTrendingMovies();
    }, []);

}

export default useTrendingMovies