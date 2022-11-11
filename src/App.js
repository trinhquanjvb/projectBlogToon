import styles from './App.module.scss'
import Router from './router'

import { useState } from 'react'
import { useEffect } from 'react'
import classNames from 'classnames/bind'

function App() {
   const cx = classNames.bind(styles)

   return (
      <div className={cx('Home')}>
         <Router />
      </div>
   )
}

export default App
