import MainPage from '../screen/Home/MainPage'
import RemainPage from '../screen/Home/RemainPage'

import { Route, Routes } from 'react-router-dom'
import Home from '../screen/Home'

function Router() {
   return (
      <Routes>
         <Route path='/' element={<Home />}>
            <Route path='' element={<MainPage />} />
            <Route path='RemainPage' element={<RemainPage />} />
         </Route>
      </Routes>
   )
}

export default Router
