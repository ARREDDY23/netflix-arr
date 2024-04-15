import React from 'react'
import { POSTER_CDN } from '../utils/constants'

const MovieCard = ({imgPath}) => {
    if (!imgPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
        <img alt="Movie Poster" src={POSTER_CDN+ imgPath}/>
    </div>
  )
}

export default MovieCard