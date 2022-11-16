import Detail from './Detail'
import Topic from './Topic'
import './ExtractContent.scss'

function ExtractContent(props) {
   console.log(props.data[0])
   return (
      <div className='extractContent'>
         <Topic
            heading={props.data.heading}
            time={props.data.time}
            avatar={props.data.avatar}
            title={props.data.title}
            position={props.data.position}
         />
         <Detail
            image={props.data.image}
            content={props.data.content}
            more={props.data.more}
            buttons={props.data.buttons}
         />
      </div>
   )
}

export default ExtractContent
