import './Topic.css'

import React from 'react'
function Topic(props) {
   return (
      <div>
         <div dangerouslySetInnerHTML={{ __html: props.heading }} />
         <div dangerouslySetInnerHTML={{ __html: props.time }} />
         <div dangerouslySetInnerHTML={{ __html: props.avatar }} />
         <div dangerouslySetInnerHTML={{ __html: props.title }} />
         <div dangerouslySetInnerHTML={{ __html: props.position }} />
      </div>
   )
}

export default Topic
