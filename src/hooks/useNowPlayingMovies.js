import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from 'react-redux';


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1&region=IN", TMDB_OPTIONS)
      const json = await response.json();
    //   console.log(json.results);
      dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
      getNowPlayingMovies();
    }, []);

}

export default useNowPlayingMovies