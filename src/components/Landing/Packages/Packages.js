// Packages.js
import React from 'react'

const packagesData = [
  {
    title: 'Standard Package',
    description: 'Experience the wonders of Yankari with our standard package.',
    price: 20000,
  },
  {
    title: 'Premium Package',
    description: 'Upgrade your adventure with our premium package, including guided tours.',
    price: 30000,
  },
  {
    title: 'Luxury Package',
    description: 'Indulge in luxury with our exclusive package, featuring VIP services.',
    price: 50000,
  },
]

const Packages = () => {
  return (
    <section id='packages' className='bg-gray-100 py-16'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-8'>Explore Our Packages</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {packagesData.map((packageItem, index) => (
            <div key={index} className='package-card bg-white p-6 rounded-lg shadow-md hover:border-blue-200 hover:border transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1'>
              <h3 className='text-xl font-bold mb-4'>{packageItem.title}</h3>
              <p className='text-gray-700 mb-4'>{packageItem.description}</p>
              <p className='text-gray-500'>Starting at ₦{packageItem.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages