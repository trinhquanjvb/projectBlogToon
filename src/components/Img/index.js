import { useState } from 'react'

function Img({ src, alt }) {
   const [defaultAvatar, setDefaultAvatar] = useState(null)
   const handleDefaultAvatar = () => {
      setDefaultAvatar(
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8vHbpKsfEhx4niFTQEJrF9idCVYQGrrSWLcZW81v&s'
      )
   }
   return (
      <img src={defaultAvatar || src} alt={alt} onError={handleDefaultAvatar} />
   )
}

export default Img
