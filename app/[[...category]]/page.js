import HomeContainer from "@/containers/home/index.js"
import { 
  getTopRatedMovies,
  getPopularMovies,
  getCategories,
  getSingleCategory} from "@/services/movie"


export default async function HomePage({ params }) {
  let selectedCategoryMovies;

  const topRatedPromise =  getTopRatedMovies()
  const popularPromise = getPopularMovies()
  const categoryPromise = getCategories()

  const [{results: topRatedMoviesData}, {results: popularMoviesData}, {genres: categoryData}] = await Promise.all([topRatedPromise, popularPromise, categoryPromise])

    if(params.category?.length > 0){
        const { results } = await getSingleCategory(params.category[0])
        selectedCategoryMovies = results
    }  
  return (
    <HomeContainer 
    topRatedMoviesData = { topRatedMoviesData }
    popularMoviesData = { popularMoviesData } 
    categoryData = { categoryData }
    selectedCategoryMovies = {{
            id : params.category?.[0] ?? "",
            movies: selectedCategoryMovies ? selectedCategoryMovies.slice(0,12) : [],
        }}
    />

  )
}

 