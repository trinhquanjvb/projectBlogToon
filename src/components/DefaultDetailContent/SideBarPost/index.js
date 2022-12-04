function SideBar({ headingSideBarPost, lists }) {
   return (
      <>
         <h3>{headingSideBarPost}</h3>
         <ul>
            {lists?.map((list, i) => (
               <li key={i}>{list}</li>
            ))}
         </ul>
      </>
   )
}

export default SideBar
