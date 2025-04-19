import React from 'react'
import { NavLink } from 'react-router-dom' 

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1
      className='font-extrabold text-[50px] text-center mt-16'>
      <span className='text-[#f56551]'>Discover Your Next Adventure with AI: </span> 
      Personalized Itineraries at Your Fingertips</h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>

      <NavLink to={'/create-trip'}>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Get Started, It's Free</button>
      </NavLink>
      </div>
    
    

  )
}

export default Hero
