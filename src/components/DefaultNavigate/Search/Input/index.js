import './Input.scss'
import RenderInput from './RenderInput'
import { searchUser } from '../../../../redux/actions'

import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

function Input() {
   const dispatch = useDispatch()
   const [value, setValue] = useState('')

   const handleTyping = (e) => {
      setValue(e.target.value)
   }
   const handleClear = (e) => {
      setValue('')
   }

   useEffect(() => {
      if (!value.trim()) {
         return
      }
      dispatch(searchUser(value))
   }, [value])

   return (
      <>
         <RenderInput
            handleTyping={handleTyping}
            handleClear={handleClear}
            value={value}
         />
      </>
   )
}

export default Input
