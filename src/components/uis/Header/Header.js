import React from 'react'
import { Link } from 'react-router-dom'

import { images } from '../../../assets/constants/data'

const Header = () => {
  return (
    <header className='bg-gray-800 p-3'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link to='/' className='flex items-center text-white'>
          <img src={images.logo} alt='Logo' className='h-16 w-16 mr-2 rounded-full' />
          <span className='text-2xl font-bold uppercase'>Yankari Game Reserve, Bauchi</span>
        </Link>

        {/* Navigation */}
        <nav className='flex space-x-4'>
          <Link to='/home' className='text-white hover:text-gray-300'>Home</Link>
          <Link to='/about' className='text-white hover:text-gray-300'>About</Link>
          <Link to='/activities' className='text-white hover:text-gray-300'>Activities</Link>
          <Link to='/contact' className='text-white hover:text-gray-300'>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header