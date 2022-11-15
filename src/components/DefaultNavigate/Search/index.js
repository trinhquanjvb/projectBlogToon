import './Search.scss'
// import 'boxicons'

function Search() {
   return (
      <div className='search'>
         <div className='search__text'>
            <div className='search__text--item'>
               <span>Reader</span>
               <i class='bx bxs-right-top-arrow-circle icon'></i>
            </div>
            <div className='search__text--item'>
               <span>Portfolio</span>
               <i class='bx bx-sun icon'></i>
            </div>
         </div>
         <div className='search__input'>
            <i class='bx bx-search-alt-2 icon'></i>
            <input className='search__input--item' placeholder='Search' />
            <div className='search__input--texts'>
               <span>ctrl</span>
               <span>K</span>
            </div>
         </div>
      </div>
   )
}

export default Search
