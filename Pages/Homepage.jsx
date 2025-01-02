import React from 'react'
import Header from '../src/components/Header'
import HeroSection from '../src/components/HeroSection';
import ViewMovies from '../src/components/ViewMovies';
import TopRatedSection from '../src/components/TopRatedSection';
import PopularMoviesSection from '../src/components/PopularMoviesSection';
import Footer from '../src/components/Footer';

const Homepage = () => {
  return (
    <div id='home' className='homepage'>
      <Header />
      <HeroSection />
      <ViewMovies />
      <TopRatedSection />
      <PopularMoviesSection />
      <Footer />
    </div>
  );
}

export default Homepage