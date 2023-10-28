import Features from './Features/Features'
import Packages from './Packages/Packages'
import Hero from './Hero/Hero'
import Chatbot from '../Chatbot/Chatbot'

const Landing = () => {
  return (
    <article className='flex flex-col w-full bg-gray-100 text-gray-900 min-h-screen'>
        <Hero />
        <Features />
        <Packages />
        <Chatbot />
    </article>
  )
}

export default Landing