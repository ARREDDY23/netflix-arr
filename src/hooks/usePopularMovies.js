import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from 'react-redux';


const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", TMDB_OPTIONS)
      const json = await response.json();
    //   console.log(json.results);
      dispatch(addPopularMovies(json.results))
    }

    useEffect(() => {
      getPopularMovies();
    }, []);

}

export default usePopularMovies