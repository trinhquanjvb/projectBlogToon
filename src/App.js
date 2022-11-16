import styles from './App.module.scss'
import Router from './router'

import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'

function App() {
   const cx = classNames.bind(styles)
   const isToggleTheme = useSelector(
      (store) => store.reducersHome.isToggleTheme
   )

   return (
      <div className={cx('home', isToggleTheme ? 'dark' : null)}>
         <Router />
      </div>
   )
}

export default App
