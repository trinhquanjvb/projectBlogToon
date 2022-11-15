import './Topic.css'

function Topic(props) {
   return (
      <div>
         <div dangerouslySetInnerHTML={{ __html: props.heading }} />
         <div dangerouslySetInnerHTML={{ __html: props.time }} />
         <div class='topic__wrap'>
            <div class='topic__wrap--img'>
               <div dangerouslySetInnerHTML={{ __html: props.avatar }} />
            </div>
            <div class='topic__wrap--content'>
               <div dangerouslySetInnerHTML={{ __html: props.title }} />
               <div dangerouslySetInnerHTML={{ __html: props.position }} />
            </div>
         </div>
      </div>
   )
}

export default Topic
