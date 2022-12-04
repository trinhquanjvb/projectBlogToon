import './ResultInput.scss'
import Img from '../../../../Img'

function ResultInput({ dataUsers }) {
   return (
      <div className='result'>
         {/* search have data */}
         {dataUsers.length > 0 ? (
            dataUsers.map((dataUser) => (
               <div className='result__item' key={dataUser.id}>
                  <div className='result__item--info'>
                     <div className='info__avata'>
                        <Img src={dataUser.avatar} alt={dataUser.nickname} />
                     </div>
                     <div className='info__name'>{dataUser.nickname}</div>
                  </div>

                  <i className='bx bx-detail'></i>
               </div>
            ))
         ) : (
            /* search no have data*/
            <div className='error'>
               <i className='bx bx-error'></i>
               <div>No result</div>
            </div>
         )}
      </div>
   )
}

export default ResultInput
