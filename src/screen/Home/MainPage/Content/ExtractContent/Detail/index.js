function Detail(props) {
   return (
      <div>
         <div dangerouslySetInnerHTML={{ __html: props.image }} />
         <div dangerouslySetInnerHTML={{ __html: props.content }} />
         <div dangerouslySetInnerHTML={{ __html: props.more }} />
         {/* <div dangerouslySetInnerHTML={{ __html: props.buttons }} /> */}
      </div>
   )
}

export default Detail
