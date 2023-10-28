import { images } from "../../../assets/constants/data"

const Hero = () => {
  return (
    <section
      className='hero bg-cover bg-center relative text-white text-center py-16 min-h-[400px]'
      style={{ backgroundImage: `url(${images.photo1})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className='text-4xl font-bold mb-4'>Discover Yankari Game Reserve</h1>
        <p className='text-lg mb-8'>Experience the beauty of nature and wildlife at its best!</p>
        <a href='#explore' className='bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300'>Explore Now</a>
      </div>
    </section>
  )
}

export default Hero
