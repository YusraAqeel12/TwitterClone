import React from 'react'
import { ArrowPathIcon } from '@heroicons/react/20/solid'
import TweetBox from './TweetBox'
import Tweet from '@/ui/Tweet'
import user from "../../public/user.png"
import Tweetimage from "../../public/tweetimage.png"
const Feed = () => {
  return (
    <div className='flex flex-col flex-grow col-span-5 border-l-2 border-r-2 px-2 '>
     
      {/** HOME AND LOGO */}
    <div className='flex  justify-between border-b-2'>
        <div className='font-bold'>Home </div>
        <ArrowPathIcon className='h-5 w-5 text-blue-400 cursor-pointer transition-all duration-150 hover:rotate-180 active:scale-125'/>   
    </div>
      
      {/** TWEETBOX */}
      <TweetBox/>

      <Tweet _id={5}
             _createdAt='6'
             _updatedAt='6'
             _type='tweet'
             text='This is my First Tweet'
             username='Yusra Aqeel'
             img={Tweetimage}
             profileimg={user}
      
      />
   
    </div>
  )
}

export default Feed
//click it is for active 