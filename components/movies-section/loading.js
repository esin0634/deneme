import React from 'react'
import Skeleton from '@/components/skeleton'

const MoviesSectionLoading = () => {
  return (
    <div className='space-y-10 lg:p-10'>
    <Skeleton width={128} height={36}/>
    <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-10 '>
        {Array(5).fill(null).map((_,index) => (
            <Skeleton key={index} width={150} height={200} />
        ))}
    </div>
</div>
  )
}

export default MoviesSectionLoading