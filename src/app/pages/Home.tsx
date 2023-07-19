import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ProfileSection from '../components/Home/ProfileSection'

const Home = () => {
  return (
    // Main Web Page
    <div className='w-screen min-h-screen flex flex-col justify-center font-nunito ' >
      {/* Containers for Sections */}
      <div className='h-auto 2xl:w-[85rem] xl:w-11/12 md:w-10/12 sm:w-9/12 mx-auto flex flex-row flex-wrap justify-between'>
        <HeroSection />
        <ProfileSection />
      </div>
    </div>
  )
}

export default Home