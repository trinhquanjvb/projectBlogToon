import DefaultNavigate from '../../components/DefaultNavigate'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

import { Outlet } from 'react-router-dom'

function Home() {
   return (
      <>
         <DefaultNavigate />
         <Sidebar />
         <Outlet />
         <Footer />
      </>
   )
}

export default Home
