import Link from 'next/link'


const Categories = ( { categories }) => {
  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-6 gap-5 p-5 w-full'>
        
          {categories.map((category) =>(
              <Link
                  key={category.id}
                  href={`/${category.id}`}
              >
                  <div className='flex justify-center items-center p-2 bg-neutral-200/10 rounded-lg hover:bg-neutral-200/40 '>{category.name}</div>
              </Link>
  
          ) )}
          
      </div>
    </div>

    
  )
}

export default Categories