import './RenderLogin.scss'
import Error from '../../components/Error'

function RenderLogin({
   handleEmail,
   handlePassword,
   handleSubmit,
   email,
   password,
   errorEmail,
   errorPassword,
   noticeEmail,
   noticePassword,
}) {
   return (
      <div className='body'>
         <div className='login__container'>
            <h1 className='heading'>Login</h1>
            <form action=''>
               <div className='wrap__input'>
                  <input
                     type='text'
                     name=''
                     className='input'
                     placeholder='trinhminhquan'
                     id='email'
                     onChange={handleEmail}
                     value={email}
                  />
                  <span className='bottom__color'></span>
                  {errorEmail && <Error notice={noticeEmail} />}
               </div>
               <div className='wrap__input'>
                  <input
                     type='password'
                     name=''
                     className='input'
                     placeholder='Quande12!@'
                     id='password1'
                     onChange={handlePassword}
                     value={password}
                  />
                  <span className='bottom__color'></span>
                  {errorPassword && <Error notice={noticePassword} />}
               </div>

               <button id='login' type='submit' onClick={handleSubmit}>
                  Login
               </button>
               <div className='login__footer'>
                  Not a member?
                  <span>Signup</span>
               </div>
            </form>
         </div>
      </div>
   )
}

export default RenderLogin
