import './Search.scss'
import { useState, useEffect } from 'react'

function Search() {
   const [value, setValue] = useState('')

   const handleTyping = (e) => {
      setValue(e.target.value)
   }
   const handleClear = (e) => {
      setValue('')
   }

   useEffect(() => {
      document.onkeypress = (e) => {
         if (e.keyCode === 17) {
            console.log('ctrl')
            if (e.keyCode === 75) {
               e.preventDefault()
               console.log(' k')
            }
         }
      }
   }, [document.onkeydown])

   return (
      <div className='search__input'>
         <i class='bx bx-search-alt-2 icon'></i>
         <input
            className='search__input--item'
            placeholder='Search'
            onChange={handleTyping}
            value={value}
         />
         <div className='search__input--texts'>
            {value ? (
               <i class='bx bx-x close' onClick={handleClear}></i>
            ) : (
               <>
                  <span>ctrl</span>
                  <span>K</span>
               </>
            )}
         </div>
      </div>
   )
}

export default Search
