import React from 'react'
import Logo from "../../public/logo.png"
import Image from 'next/image'
import Sidebarlink from "../ui/Sidebarlink"
import {AiOutlineHome , AiOutlineBell, AiOutlineUnorderedList ,  AiOutlineMail , } from "react-icons/ai"
import { BsHash  , BsFillBookmarkFill} from 'react-icons/bs'

function Sidebar() {
  return (
    <div className='flex flex-col col-span-2 items-center  md:items-start '>
      
      {/** IMAGE  */}
        <div>
        <Image src={Logo} alt='Logo' className='h-10 w-8 m-3'/>        
        </div>
      
    
      {/** SIDEBAR LINK  */}
      
      <div className=' py-2'>
       <Sidebarlink  text='Home' Icon={AiOutlineHome} />
       <Sidebarlink  text='Explore' Icon={BsHash}/>
       <Sidebarlink  text='Notification' Icon={AiOutlineBell}/>
       <Sidebarlink  text='Bookmarks' Icon={BsFillBookmarkFill}/>
       <Sidebarlink  text='Messages' Icon={AiOutlineMail}/>
       <Sidebarlink  text='List' Icon={AiOutlineUnorderedList}/>
       </div>


      {/** BUTTON */}

       


    </div>
  )
}

export default Sidebar