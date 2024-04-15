import MovieList from './MovieList'
import {useSelector} from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 pl-1 md:-mt-52 relative z-20">
          <MovieList title={"Now Playing in India"} movies={movies.nowPlayingMovies}/>
          <MovieList title={"Trending"} movies={movies.trendingMovies}/>
          <MovieList title={"Popular"} movies={movies.popularMovies}/>
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
        </div>
      </div>
    )
  )
}

export default SecondaryContainer