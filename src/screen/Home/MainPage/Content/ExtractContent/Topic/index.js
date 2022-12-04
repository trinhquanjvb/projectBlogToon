import './Topic.css'

function Topic(props) {
   return (
      <>
         <div dangerouslySetInnerHTML={{ __html: props.heading }} />
         <div dangerouslySetInnerHTML={{ __html: props.time }} />
         <div className='topic__wrap'>
            <div className='topic__wrap--img'>
               <div dangerouslySetInnerHTML={{ __html: props.avatar }} />
            </div>
            <div className='topic__wrap--content'>
               <div dangerouslySetInnerHTML={{ __html: props.title }} />
               <div dangerouslySetInnerHTML={{ __html: props.position }} />
            </div>
         </div>
      </>
   )
}

export default Topic
