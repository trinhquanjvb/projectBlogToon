import './Lists.scss'

import { useState, useEffect } from 'react'

function Lists() {
   const [lists, setLists] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         fetch('http://localhost:3000/lists')
            .then((res) => res.json())
            .then((res) => {
               return setLists(res)
            })
      }
      fetchData().catch((res) => res)
   }, [])

   // render
   return (
      <div className='list'>
         <div className='list_hide'></div>
         <div class='list__wrap'>
            <h3 className='list__wrap--heading'>Recent posts</h3>
            {lists.map((list) => (
               <li className='list__wrap--item' key={list.id}>
                  {list.list}
               </li>
            ))}
         </div>
      </div>
   )
}

export default Lists
