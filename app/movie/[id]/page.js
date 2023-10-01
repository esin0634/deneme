import React from 'react'
import MovieContainer from '@/containers/movie'
import { notFound } from "next/navigation"
import { getMovieDetails } from '@/services/movie'


async function MoviePage ({ params }){
  
  const movieDetail = await getMovieDetails(params.id)
  
  if ('success' in movieDetail && movieDetail.success === false){
    notFound();  
  } 
   
  return (
    <MovieContainer movie={movieDetail} />
  )
}

export default MoviePage