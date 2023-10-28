import { Outlet } from 'react-router-dom'

import Header from '../uis/Header/Header'
import Footer from '../uis/Footer/Footer'

const Layout = () => {
  return (
    <main className='flex flex-col w-full min-h-screen text-gray-200 bg-gray-900'>
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout