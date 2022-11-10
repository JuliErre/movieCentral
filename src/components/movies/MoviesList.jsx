import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies}) => {
  return (
    <>
     {movies.map(movie => (<MovieCard movie={movie} key={movie.id}/>))}
    </>
  )
}

export default MoviesList