import './Search.scss'
import Input from './Input'

function RenderSearch({ onClick, isToggleTheme }) {
   // render
   return (
      <div className='search'>
         <div className='search__text'>
            <div className='search__text--item'>
               <span>Reader</span>
               <i className='bx bxs-right-top-arrow-circle icon'></i>
            </div>
            <div className='search__text--item'>
               <span>Portfolio</span>
               {isToggleTheme ? (
                  <i
                     className='bx bx-moon icon'
                     onClick={onClick}
                     title='Switch between dark and light mode (currently light mode)'
                  ></i>
               ) : (
                  <i
                     className='bx bx-sun icon'
                     onClick={onClick}
                     title='Switch between dark and light mode (currently light mode)'
                  ></i>
               )}
            </div>
         </div>

         <Input />
      </div>
   )
}

export default RenderSearch
