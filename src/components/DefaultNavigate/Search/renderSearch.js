import './Search.scss'
import Search from './Search'

function RenderSearch({ onClick, isToggleTheme }) {
   // render
   return (
      <div className='search'>
         <div className='search__text'>
            <div className='search__text--item'>
               <span>Reader</span>
               <i class='bx bxs-right-top-arrow-circle icon'></i>
            </div>
            <div className='search__text--item'>
               <span>Portfolio</span>
               {isToggleTheme ? (
                  <i
                     class='bx bx-moon icon'
                     onClick={onClick}
                     title='Switch between dark and light mode (currently light mode)'
                  ></i>
               ) : (
                  <i
                     class='bx bx-sun icon'
                     onClick={onClick}
                     title='Switch between dark and light mode (currently light mode)'
                  ></i>
               )}
            </div>
         </div>

         <Search />
      </div>
   )
}

export default RenderSearch
