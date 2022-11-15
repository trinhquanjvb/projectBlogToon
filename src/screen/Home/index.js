import DefaultNavigate from '../../components/DefaultNavigate'
import { Outlet } from 'react-router-dom'

function Home() {
   return (
      <div>
         <DefaultNavigate />
         <Outlet />
      </div>
   )
}

export default Home
