import './Content.scss'
import ExtractContent from './ExtractContent'

import { useState, useEffect } from 'react'

function Content() {
   const [datas, setDatas] = useState([])
   useEffect(() => {
      const fetchData = async () => {
         fetch('http://localhost:3000/posts')
            .then((res) => res.json())
            .then((result) => setDatas(result))
      }
      fetchData()
         .catch((res) => res)
         .finally('done')
   }, [])
   return (
      <div className='content'>
         {datas.map((data, i) => {
            return <ExtractContent data={data} key={i} />
         })}
      </div>
   )
}

export default Content
