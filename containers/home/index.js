import React from 'react'

import FeaturedMovie from '@/components/featured-movie/FeaturedMovie'
import Categories from '@/components/categories/Categories'
import MoviesSection from '@/components/movies-section/MoviesSection'

 const styles = {
  pageContainer : `space-y-10 w-max-screen flex flex-col items-center justify-center`,
 }
const HomeContainer = ( { categoryData = [], popularMoviesData = [],topRatedMoviesData = [], selectedCategoryMovies }) => {

  return (
    <div className={styles.pageContainer}>
      <FeaturedMovie movie={topRatedMoviesData?.[0]} />
      <Categories categories={categoryData.slice(0,6)} />
      {
        selectedCategoryMovies.movies.length > 0 && (
          <MoviesSection 
            title={categoryData.find((genre) => `${genre.id}` === selectedCategoryMovies.id).name}
            movies={selectedCategoryMovies.movies} 
          />
        )
      }
      <MoviesSection title="Popular Movies" movies={popularMoviesData.slice(0,12)} />
      <MoviesSection title="Top Rated" movies={topRatedMoviesData.slice(0,12)} />
    </div>
  )
}

export default HomeContainer