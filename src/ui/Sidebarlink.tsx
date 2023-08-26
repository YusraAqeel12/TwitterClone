import React  from 'react'
import { IconType } from 'react-icons'
interface Props{
  text : string , 
  Icon : IconType
  
}
function Sidebarlink({text  , Icon} : Props) {
  return (
    <div className='flex flex-row items-center justify-center py-2 px-2 ' >
      <Icon className='h-5 w-5' />
      <p className='hidden lg:inline'>{text}</p>  
    </div>
  )
}

export default Sidebarlink