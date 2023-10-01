import React from 'react'

import SeriesCategories from '@/components/seriesCategories/SeriesCategories';
import FeaturedMovie from '@/components/featured-movie/FeaturedMovie'
import SeriesSection from '@/components/series-section/SeriesSection'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNum = getRandomInt(1,20); 


const styles = {
pageContainer : `space-y-10 w-max-screen flex flex-col items-center justify-center`,
}

const SeriesContainer = ( { 
    popularSeriesData = [],
    topRatedSeriesData = [],
    categoriesSeriesData = [],
    selectedCategorySeries
  }) => {

  return (
    <div className={styles.pageContainer}>
      <FeaturedMovie movie={topRatedSeriesData?.[randomNum]} />
      <SeriesCategories categories={categoriesSeriesData.slice(1,7)} />
      
      {
        selectedCategorySeries.series.length > 0 && (
          <SeriesSection title={categoriesSeriesData.find((genre) =>`${genre.id}` === selectedCategorySeries.id).name}
          series= {selectedCategorySeries.series} />
        )
      }
      <SeriesSection title="Top Rated" series={topRatedSeriesData.slice(2,14)} />
      <SeriesSection title="Popular Series" series={popularSeriesData.slice(2,14)} />

    </div>
  )
}

export default SeriesContainer