import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from 'react-redux';


const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
      const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", TMDB_OPTIONS)
      const json = await response.json();
    //   console.log(json.results);
      dispatch(addTopRatedMovies(json.results))
    }

    useEffect(() => {
      getTopRatedMovies();
    }, []);

}

export default useTopRatedMovies