import './Input.scss'
import ResultInput from './ResultInput'
import { useSelector } from 'react-redux'

function RenderInput({ value, handleTyping, handleClear }) {
   const dataUsers = useSelector((store) => store.reducerComponents.dataUsers)

   return (
      <div className='input1'>
         <div className='search__input'>
            <i className='bx bx-search-alt-2 icon'></i>
            <input
               className='search__input--item'
               placeholder='Search'
               onChange={handleTyping}
               value={value}
            />
            <div className='search__input--texts'>
               {value ? (
                  <i className='bx bx-x close' onClick={handleClear}></i>
               ) : (
                  <>
                     <span>ctrl</span>
                     <span>K</span>
                  </>
               )}
            </div>
         </div>

         {value ? <ResultInput dataUsers={dataUsers} /> : null}
      </div>
   )
}

export default RenderInput
