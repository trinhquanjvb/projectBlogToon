import './Avatar.scss'

import { Link } from 'react-router-dom'

function Avatar() {
   return (
      <>
         <div className='avatar'>
            <div className='avatar__img'>
               <Link to='/'>
                  <img
                     src='https://doko.clip-sub.com/img/pc_header_lower_doraemon.png'
                     alt='doraemon'
                  />
               </Link>
            </div>
            <div className='avatar__title'>Doko's lair</div>
         </div>
      </>
   )
}

export default Avatar
