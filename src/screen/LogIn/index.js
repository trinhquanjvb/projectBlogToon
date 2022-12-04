import RenderLogin from './RenderLogin'
import { login } from '../../redux/actions'

import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function LogIn() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const regexEmail = /(.jvb@gmail.com|@jvb-corp.com)$/
   const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [errorEmail, setErrorEmail] = useState(false)
   const [errorPassword, setErrorPassword] = useState(false)
   const [noticeEmail, setNoticeEmail] = useState('')
   const [noticePassword, setNoticePassWord] = useState('')

   const handleEmail = (e) => {
      setEmail(e.target.value)
   }
   const handlePassword = (e) => {
      setPassword(e.target.value)
   }
   const handleSubmit = (e) => {
      e.preventDefault()

      if (email === 'trinhminhquan' && password === 'Quande12!@') {
         setErrorEmail(false)
         setErrorPassword(false)
         const accountUserString = {
            email,
            password,
         }

         const accountUser = JSON.stringify(accountUserString)
         const accountUserStorage = localStorage.setItem(
            'accountUser',
            accountUser
         )
         console.log('accountUserStorage', accountUserStorage)
         const action = login()
         dispatch(action)
         navigate('/')
      }
      // TH1: email vs pass rỗng: oki
      else if (email === '') {
         setErrorEmail(true)
         setNoticeEmail('vui lòng nhập thông tin Email')
      }
      //  TH2: email != rỗng vs regexEmail= false ()
      else if (!regexEmail.test(email)) {
         setErrorEmail(true)
         setNoticeEmail('Email không tồn tại')
         setErrorPassword(false)
      }
      // TH3: regexEmail= true, pass = ''
      else if (regexEmail.test(email)) {
         setErrorEmail(false)
         if (password === '') {
            setErrorPassword(true)
            setNoticePassWord('vui lòng nhập thông tin Password')
         } else if (!regexPassword.test(password)) {
            setErrorPassword(true)
            setNoticePassWord('Password không đúng')
            console.log('password false')
         }
      }
      if (email === 'trinhnv@jvb-corp.com' && password === 'Quande12!@') {
         setErrorEmail(false)
         setErrorPassword(false)
      }
   }

   return (
      <>
         <RenderLogin
            handleEmail={handleEmail}
            handlePassword={handlePassword}
            handleSubmit={handleSubmit}
            email={email}
            password={password}
            errorEmail={errorEmail}
            errorPassword={errorPassword}
            noticeEmail={noticeEmail}
            noticePassword={noticePassword}
         />
      </>
   )
}

export default LogIn
