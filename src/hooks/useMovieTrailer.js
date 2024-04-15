import { TMDB_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();
    
        const getMovieVideos = async () => {
          const response = await fetch("https://api.themoviedb.org/3/movie/" +movie_id +"/videos?language=en-US", TMDB_OPTIONS)
          const json = await response.json();
          const trailersList = json.results.filter(video => video.type === "Trailer")
          const trailer = trailersList ? trailersList[0] : json.results[0];
        //   console.log(trailer);
          dispatch(addTrailerVideo(trailer));
        }
    
        useEffect(() => {
            getMovieVideos();
        }, []);
}

export default useMovieTrailer;