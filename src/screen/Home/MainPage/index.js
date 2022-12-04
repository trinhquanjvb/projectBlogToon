import './MainPage.scss'
import { Outlet } from 'react-router-dom'
// import Topic from '../MainPage/Content/ExtractContent/Topic'

function MainPage() {
   return (
      <div className='mainPage'>
         <Outlet />
      </div>
   )
}

export default MainPage
