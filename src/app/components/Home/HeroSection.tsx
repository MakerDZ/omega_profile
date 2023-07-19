import React from 'react'
import Image from 'next/image'
import { config } from '../../../../config'

const HeroSection = () => {
  return (
    <div className='2xl:w-[60%] lg:w-[50%] md:w-[48%] w-[362px] flex flex-col justify-center mx-auto mt-10 mb-16'>
      <div>
        <div className='flex flex-row items-center'>
          <h1 className='font-black pt-5 xl:pr-5 text-hero_title 2xl:text-[3.438rem] xl:text-[2.5rem] lg:text-[2.0rem] md:text-[1.7rem] sm:text-[1.65rem] text-[1.5rem]'>
            {config.hero_section.title}
          </h1>
          <div className='relative xl:w-[100px] xl:h-[93px] lg:w-20 lg:-h-[73px] md:w-[72px] md:h-[65px] sm:w-[65px] sm:h-[58px] w-[58px] h-[51px]'>
            <Image
              src={config.hero_section.icon_beside_title}
              alt="title_icon"
              fill
            />
          </div>
        </div>
      </div>
      <p className='font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-base w-11/12 text-hero_des pt-8'>
        {config.hero_section.description}
      </p>
      <div className='flex flex-row mt-7'>
        <button className='bg-hero_button_bg text-hero_button_lb xl:px-11 lg:px-9 md:px-6 py-3 px-4 rounded-lg mr-8 font-bold xl:text-xl lg:text-base'>
          <a href={config.hero_section.buttons.first_button.link}>
            {config.hero_section.buttons.first_button.name}
          </a>
        </button>
        <button className='bg-hero_button_bg text-hero_button_lb xl:px-11 lg:px-9 md:px-6 py-3 px-4 rounded-lg font-bold xl:text-xl lg:text-base'>
          <a href={config.hero_section.buttons.second_button.link}>
            {config.hero_section.buttons.second_button.name}
          </a>
        </button>
      </div>
    </div>
  )
}

export default HeroSection