import FeaturedMovie from '@/components/featured-movie/FeaturedMovie'
import React from 'react'

const MovieContainer = ({ movie }) => {
  return (
    <div className='h-screen flex items-center'>
      <FeaturedMovie movie={movie} isCompact={false} />

    </div>
  )
}

export default MovieContainer