import './Avatar.scss'

function Avatar() {
   return (
      <>
         <div className='avatar'>
            <div className='avatar__img'>
               <img
                  src='https://doko.clip-sub.com/img/pc_header_lower_doraemon.png'
                  alt='doraemon'
               />
            </div>
            <div className='avatar__title'>Doko's lair</div>
         </div>
      </>
   )
}

export default Avatar
