import React from 'react'

function Header() {
  return (
    <>
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <img src='/logo.svg'/>
      <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign In</button>
      </div>
    </div>
    </>
)
}

export default Header
