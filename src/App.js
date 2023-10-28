import { Routes, Route } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { urls } from './assets/constants/data'
import useTitle from './hooks/useTitle'
import Layout from './components/Layout/Layout'
import Landing from './components/Landing/Landing'

const App = () =>{
  useTitle('Yankari Game Reserve|Tourist Center Bauchi')

  return(
    <Routes>{/* routes container */}
      <Route path={urls.root} element={<Layout />}>{/* root routing */}
        {/* public routing */}
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  )
}

export default App