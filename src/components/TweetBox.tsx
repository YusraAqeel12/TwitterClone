'use client'
import React , {useState} from 'react'
import Image from 'next/image'
import { CalendarIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import User from "../../public/user.png"
const TweetBox = () => {
  const [input, setInput] = useState("")

  return (
    <div className=''>

      {/** IMAGE */}
      <div className='border-b-2 flex flex-col space-x-3 overflow-y-scroll p-4'>
        <Image src={User} alt='user' height={20} width={20} className='object-contain rounded-full'/>
        
      {/** TEXT AREA */}
      <div className='w-full divide-y '>
      <textarea 
      className=' w-full outline-none min-h-[50px] tracking-wide' 
      rows={2} 
      placeholder='Whats Happening'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      </div> 
      
        {/** MOJI AND BUTTON */}
      <div className='flex items-center w-full'>
      <div className='flex flex-1'>
          <CalendarIcon className='h-5 w-5 text-blue-300'/>
          <QuestionMarkCircleIcon className='h-5 w-5 text-blue-300'/>
      </div>
      <div className='flex w-20 h-6 rounded-full bg-blue-400 items-center justify-center cursor-pointer'>Tweet</div>


      </div> 
      
      
      </div>

     



    </div>
  )
}

export default TweetBox


//overflow y scroll is liyae kiya kai agar input aayi ga input box mai ziyaada honay ki wajah sai wo neechay scroll hota rahay ga 
//divide y jitnay bhee child elements hoongi unkai darmiyaan border aagai ga 
//jab kai border b mai sirf parent element kai neechay border aata hai
//image us waqt he aayi gee jab delected file true hai