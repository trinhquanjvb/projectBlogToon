import './Lists.scss'

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Lists() {
   const [lists, setLists] = useState([])
   let location = useLocation()
   let url = location.pathname

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch('http://localhost:3001/lists')
         const lists = await response.json()
         setLists(lists)
      }
      fetchData().catch((res) => console.log(res))
   }, [])

   // render
   return (
      <div className='list'>
         <div className='list_hide'></div>
         <div className='list__wrap'>
            <h3 className='list__wrap--heading'>Recent posts</h3>
            {lists.map((list) => (
               <Link
                  to={list.link}
                  className={
                     url === list.link
                        ? 'list__wrap--item active'
                        : 'list__wrap--item'
                  }
                  key={list.id}
               >
                  {list.list}
               </Link>
            ))}
         </div>
      </div>
   )
}

export default Lists
