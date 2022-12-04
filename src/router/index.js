import Home from '../screen/Home'
import MainPage from '../screen/Home/MainPage'
import RemainPage from '../screen/Home/RemainPage'
import Content from '../screen/Home/MainPage/Content'
import Post1 from '../screen/Home/MainPage/DetailContent/Post1'
import Post2 from '../screen/Home/MainPage/DetailContent/Post2'
import Post3 from '../screen/Home/MainPage/DetailContent/Post3'
import Post4 from '../screen/Home/MainPage/DetailContent/Post4'
import Post5 from '../screen/Home/MainPage/DetailContent/Post5'
import LogIn from '../screen/LogIn'

import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Router() {
   const contents = [
      { path: '', element: Content, child: null },
      { path: 'post1', element: Post1 },
      { path: 'post2', element: Post2 },
      { path: 'post3', element: Post3 },
      { path: 'post4', element: Post4 },
      { path: 'post5', element: Post5 },
   ]

   // ko dùng localStorage mà phải dùng useSelector
   const isLogin = useSelector((store) => store.reducerLogin.isLogin)

   return (
      <Routes>
         <Route
            path='/'
            element={isLogin ? <Home /> : <Navigate to='/login' />}
         >
            {contents.map((content, i) => {
               const Component = content.element
               return (
                  <Route key={i} path='' element={<MainPage />}>
                     <Route path={content.path} element={<Component />} />
                  </Route>
               )
            })}
         </Route>
         <Route
            path='/login'
            element={!isLogin ? <LogIn /> : <Navigate to='/' />}
         />
      </Routes>
   )
}

export default Router
