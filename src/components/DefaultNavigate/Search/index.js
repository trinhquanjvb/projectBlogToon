import RenderSearch from './renderSearch'
import { toggleTheme } from '../../../redux/actions'

import { useSelector, useDispatch } from 'react-redux'

function Search() {
   const dispatch = useDispatch()
   const isToggleTheme = useSelector(
      (store) => store.reducersHome.isToggleTheme
   )

   const handleToggleTheme = () => {
      const action = toggleTheme(!isToggleTheme)
      dispatch(action)
   }

   // render
   return (
      <RenderSearch onClick={handleToggleTheme} isToggleTheme={isToggleTheme} />
   )
}

export default Search
