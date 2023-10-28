import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white p-8'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
        {/* Quick Links */}
        <div className='mb-4 lg:mb-0'>
          <h3 className='text-xl font-bold mb-2'>Quick Links</h3>
          <ul className='list-none'>
            <li><Link to='/' className='text-gray-400 hover:text-white'>Home</Link></li>
            <li><Link to='/about' className='text-gray-400 hover:text-white'>About Us</Link></li>
            <li><Link to='/activities' className='text-gray-400 hover:text-white'>Activities</Link></li>
            <li><Link to='/gallery' className='text-gray-400 hover:text-white'>Gallery</Link></li>
            <li><Link to='/contact' className='text-gray-400 hover:text-white'>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className='mb-4 lg:mb-0'>
          <h3 className='text-xl font-bold mb-2'>Contact Us</h3>
          <p className='text-gray-400'>Yankari Game Reserve</p>
          <p className='text-gray-400'>Address: Bauchi</p>
          <p className='text-gray-400'>Phone: +234</p>
          <p className='text-gray-400'>Email: <a href='mailto:info@yankarigamereserve.com' className='text-white'>info@yankarigamereserve.com</a></p>
        </div>

        {/* Newsletter Subscription Form */}
        <div className='mb-4 lg:mb-0'>
          <h3 className='text-xl font-bold mb-2'>Subscribe to Our Newsletter</h3>
          <p className='text-gray-400'>Stay updated with the latest news and events.</p>
          <form className='flex mt-2'>
            <input
              type='email'
              placeholder='Enter your email'
              className='bg-gray-800 border border-gray-700 text-white px-4 py-2 mr-2 focus:outline-none'
            />
            <button
              type='submit'
              className='bg-green-500 text-white px-4 py-2 hover:bg-green-600 focus:outline-none'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className='text-center mt-8 border-t border-gray-600 py-2'>
        <p className='text-gray-500'>&copy; 2023 Yankari Game Reserve. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer