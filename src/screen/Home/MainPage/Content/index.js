import './Content.scss'
import ExtractContent from './ExtractContent'
import { request } from '../../../../redux/actions'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Content() {
   const dispatch = useDispatch()
   const responseContent = useSelector(
      (store) => store.reducersHome.responseContent
   )
   useEffect(() => {
      dispatch(request())
   }, [])

   // const [datas, setDatas] = useState([])
   // useEffect(() => {
   //    const fetchData = async () => {
   //       fetch('http://localhost:3000/posts')
   //          .then((res) => res.json())
   //          .then((result) => setDatas(result))
   //    }
   //    fetchData()
   //       .catch((res) => res)
   //       .finally('done')
   // }, [])
   return (
      <div className='content'>
         {/* {console.log(responseContent)} */}
         {responseContent.map((data, i) => {
            return <ExtractContent data={data} key={i} />
         })}
      </div>
   )
}

export default Content
