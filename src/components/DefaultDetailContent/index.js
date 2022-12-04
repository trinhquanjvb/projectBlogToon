import './DefaultDetailContent.scss'
import Topic from '../../screen/Home/MainPage/Content/ExtractContent/Topic'
import SiderBarPost from './SideBarPost'

function DefaultDetailContent({
   heading,
   time,
   avatar,
   title,
   position,
   headingsideBarPost,
   lists,
   children,
}) {
   return (
      <div className='post1'>
         <div className='post1__content'>
            <Topic
               heading={heading}
               time={time}
               avatar={avatar}
               title={title}
               position={position}
            />
            {children}
         </div>

         <div className='post1__sideBar'>
            <SiderBarPost
               headingsideBarPost={headingsideBarPost}
               lists={lists}
            />
         </div>
      </div>
   )
}

export default DefaultDetailContent
