import { FaGlobeAfrica } from 'react-icons/fa'
import { MdWbTwilight } from 'react-icons/md'
import { GiCaveEntrance } from 'react-icons/gi'

const Features = () => {
  const featuresData = [
    {
      title: 'Rich Wildlife',
      description: 'Explore a diverse range of wildlife, including elephants, lions, and various bird species.',
      icon: MdWbTwilight,
    },
    {
      title: 'Natural Springs',
      description: 'Visit the famous Wikki Warm Spring, known for its crystal-clear water and a constant temperature of 31°C.',
      icon: FaGlobeAfrica,
    },
    {
      title: 'Ancient Caves',
      description: 'Discover the fascinating Shau Shau Iron Smelting Furnace and explore the historical Marshall Caves.',
      icon: GiCaveEntrance,
    },
  ]

  return (
    <section id='features' className='bg-gray-200 py-16'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-8'>Explore Yankari's Unique Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {featuresData.map((feature, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:border-teal-200 hover:border transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1'>
              <feature.icon size={62} className=' mb-2 text-blue-500' />
              <h3 className='text-xl font-bold mb-4'>{feature.title}</h3>
              <p className='text-gray-700'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features