import React from 'react'
import Hero from '../../components/Home/Hero/hero'
import TrendingMovies from '../../components/Home/tranding/trendingMovies'
import LastMovies from '../../components/Home/lastMovies/lastMovies'
import PopularMovies from '../../components/Home/popular/popular'

function Home() {
  return (
    <div>
      <Hero />
      <TrendingMovies />
      <LastMovies />
      <PopularMovies />
    </div>
  )
}

export default Home
