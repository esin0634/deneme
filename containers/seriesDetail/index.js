import FeaturedMovie from '@/components/featured-movie/FeaturedMovie'
import React from 'react'

const SeriesDetailContainer = ({ series }) => {
  
  return (
      <div className='h-screen flex items-center justify-center'>
      <FeaturedMovie movie={series} isCompact={false} />
    </div>
  )
}

export default SeriesDetailContainer