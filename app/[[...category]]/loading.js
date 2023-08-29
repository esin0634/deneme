import React from 'react'
import  CategoriesLoading  from '@/components/categories/loading'
import FeaturedMovieLoading from '@/components/featured-movie/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'

const MovieLoading = () => {
  return (
    <div className='flex flex-col space-y-5 items-center '>
        <FeaturedMovieLoading/>
        <CategoriesLoading />
        <MoviesSectionLoading/>
        <MoviesSectionLoading/>
        <MoviesSectionLoading/>
    </div>
  )
}

export default MovieLoading