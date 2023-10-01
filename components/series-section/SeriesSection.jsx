import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const SeriesSection = ({title, series}) => {
  return (
    <div className='space-y-10 xl:p-10'>
        <h3 className='font-semibold text-3xl'>{title}</h3>
        <div className='grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-10 '>
            {series.map((serie)=>(
                <div key={serie.id}>
                    <Link href={`/seriesDetail/${serie.id}`}>
                        <Image
                        width={150}
                        height={150}
                        unoptimized
                        alt={serie.title}
                        src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
                        className='rounded-lg transform transition-transform hover:scale-125'
                        />

                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SeriesSection