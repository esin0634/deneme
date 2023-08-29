import HomeContainer from "@/containers/home/index.js"
import Movies from "@/mocks/movies.json"

async function delay(ms) {
  return new Promise((resolve)=> setTimeout(resolve,ms))
}

export default async function HomePage({ params }) {
    await delay(5000)

    // console.log(params)
    let selectedCategory;

    if(params.category?.length > 0){
        selectedCategory = true
    }
  
  return (
    <HomeContainer selectedCategory = {{
            id : params.category?.[0] ?? "",
            movies: selectedCategory ? Movies.results.filter((movie) =>
              movie.genre_ids.includes(Number(params.category?.[0]))
            ) : "",
        }}
    />
  )
}

 