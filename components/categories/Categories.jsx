import Link from 'next/link'
import React from 'react'

const Categories = ( { categories }) => {
  return (
    <div className='grid grid-cols-5 gap-5 p-5 w-full'>
        {categories.map((category) =>(
            <Link
                key={category.id}
                href={`/${category.id}`}
            >
                <div className='flex justify-center items-center p-2 bg-neutral-200/10 rounded-lg '>{category.name}</div>
            </Link>

        ) )}
    </div>
  )
}

export default Categories