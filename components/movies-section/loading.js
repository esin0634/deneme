import React from 'react'
import Skeleton from '@/components/skeleton'

const MoviesSectionLoading = () => {
  return (
    <div className='space-y-10 lg:p-10'>
    <Skeleton width={128} height={36}/>
    <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-10 '>
        {Array(7).fill(null).map((_,index) => (
            <Skeleton key={index} width={100} height={150}  />
        ))}
    </div>
</div>
  )
}

export default MoviesSectionLoading