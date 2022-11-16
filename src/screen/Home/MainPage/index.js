import './MainPage.scss'
import Sidebar from '../../../components/Sidebar'
import Content from './Content'

function MainPage() {
   return (
      <div className='mainPage'>
         <Sidebar />
         <Content />
      </div>
   )
}

export default MainPage
