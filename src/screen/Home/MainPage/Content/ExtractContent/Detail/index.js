import './Detail.scss'

function Detail(props) {
   return (
      <div className='detail'>
         <div
            className='detail__img'
            dangerouslySetInnerHTML={{ __html: props.image }}
         />
         <div dangerouslySetInnerHTML={{ __html: props.content }} />
         <div className='detail__wrap'>
            <div className='detail__wrapper'>
               <span className='detail__wrap--tag'>Tags:</span>
               <div
                  dangerouslySetInnerHTML={{
                     __html: props.buttons.map((button, i) => button),
                  }}
               />
            </div>
            <div
               className='detail__wrap--more'
               dangerouslySetInnerHTML={{ __html: props.more }}
            />
         </div>
      </div>
   )
}

export default Detail
