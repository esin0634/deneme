const fetchSeriesAPI = async (pathname, query = "") => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN}`
        }
      };
      
     const res = await fetch(`https://api.themoviedb.org/3${pathname}?${query}`, options)
      return res.json()
  
    } catch (error) {
      throw new Error(error)
    }
  }

  const getPopularSeries = async () => {
    return fetchSeriesAPI("/tv/popular", "language=en-US&page=1")
  }
  const getTopRatedSeries = async () => {
    return fetchSeriesAPI("/tv/top_rated", "language=en-US&page=1")
  }
  const getSeriesDetail = async (seriesId) => {
    return fetchSeriesAPI(`/tv/${seriesId}`,"language=en-US")
  }
  const getSeriesCategory = async () => {
    return fetchSeriesAPI("/genre/tv/list", "language=en-US")
  }
  const getSingleCategorySeries = async (categoryId) => {
    return fetchSeriesAPI("/discover/tv", `nclude_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${categoryId}`)
  }

  export { 
    getPopularSeries,
    getTopRatedSeries,
    getSeriesDetail,
    getSeriesCategory,
    getSingleCategorySeries
   }