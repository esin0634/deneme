const fetchMovieAPI = async (pathname , query = "") => {
  try{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN}`
        }
      };
      
      const res = await fetch(`https://api.themoviedb.org/3${pathname}?${query}`, options)
      
      return res.json()
  }catch (error){
    throw new Error(error)
  }
}



const getTopRatedMovies = async () => {
  return fetchMovieAPI("/movie/top_rated", "language=en-US&page=1")
}

const getPopularMovies = async () => {
  return fetchMovieAPI("/movie/popular","language=en-US&page=1")
}

const getCategories = async () => {
  return fetchMovieAPI("/genre/movie/list", "language=en") 
}

const getSingleCategory = async (genreId) => {
  return fetchMovieAPI("/discover/movie", `include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`)
}

const getMovieDetails = async (movieId) => {
  return fetchMovieAPI(`/movie/${movieId}`,"language=en-US")
}



export { fetchMovieAPI,
  getTopRatedMovies,
  getPopularMovies,
  getCategories,
  getSingleCategory,
  getMovieDetails }