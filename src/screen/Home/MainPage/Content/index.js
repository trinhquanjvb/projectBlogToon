import './Content.scss'
import ExtractContent from './ExtractContent'
import Loading from '../../../../components/Loading'

import { request, loadding } from '../../../../redux/actions'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Content() {
   const dispatch = useDispatch()
   const responseContent = useSelector(
      (store) => store.reducersHome.responseContent
   )
   const [isLoading, setIsLoading] = useState(false)
   // console.log(isLoading)
   useEffect(() => {
      dispatch(request(setIsLoading))
   }, [])
   if (isLoading) {
      return <Loading />
   } else {
      return (
         <div className='content'>
            <div className='content__detail'>
               {responseContent.map((data, i) => {
                  return <ExtractContent data={data} key={i} />
               })}
            </div>
            <div className='content__sideBar'></div>
         </div>
      )
   }
}

export default Content
