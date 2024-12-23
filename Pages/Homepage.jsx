import React from 'react'
import Header from '../src/components/Header'
import HeroSection from '../src/components/HeroSection';
import ViewMovies from '../src/components/ViewMovies';

const Homepage = () => {
  return (
    <div className='homepage'>
      <Header />
      <HeroSection />
      <ViewMovies />
    </div>
  );
}

export default Homepage