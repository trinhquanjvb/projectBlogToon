import DefaultNavigate from '../../components/DefaultNavigate'
import { Outlet } from 'react-router-dom'

function Home() {
   return (
      <>
         <DefaultNavigate />
         <Outlet />
      </>
   )
}

export default Home
