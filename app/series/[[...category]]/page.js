import SeriesContainer from "@/containers/series/index"
import { 
  getTopRatedSeries,
  getPopularSeries,
  getSeriesCategory,
  getSingleCategorySeries
  } from "@/services/series"
import { sendError } from "next/dist/server/api-utils"



export default async function HomePage({ params }) {
  let selectedCategorySeries 
  const topRatedPromise =  getTopRatedSeries()
  const popularPromise = getPopularSeries()
  const categoryPromise = getSeriesCategory()

  const [{results: topRatedSeriesData}, {results: popularSeriesData}, {genres: categoriesSeriesData}] = await Promise.all([topRatedPromise, popularPromise, categoryPromise])

  if(params.category?.length > 0){
    const { results } = await getSingleCategorySeries(params.category[0])
    selectedCategorySeries = results
  }

  return (
    <SeriesContainer 
    topRatedSeriesData = { topRatedSeriesData }
    popularSeriesData = { popularSeriesData } 
    categoriesSeriesData = {categoriesSeriesData}
    selectedCategorySeries = {{
      id: params.category?.[0] ?? "",
      series: selectedCategorySeries ? selectedCategorySeries.slice(0,12) : [],
    }}


    />

  )
}

 