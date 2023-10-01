import Link from "next/link"

const SeriesCategories = ( { categories } ) => {
  
    const style = {
        mainContainer : `grid grid-cols-2 md:grid-cols-6 gap-5 p-5 w-full`,
        button : `flex justify-center items-center p-2 bg-neutral-200/10 rounded-lg hover:bg-neutral-200/40`,
    }
  return (
    <div className = {style.mainContainer}>
        {categories.map((category) => (
            <Link
                key={category.id}
                href={`/series/${category.id}`}
            >
                <div className= {style.button}>
                    {category.name}
                </div>
            </Link>
        ))
        } 
    </div>
  )
}

export default SeriesCategories