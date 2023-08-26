import React from 'react'
import { tweet } from '../../typing'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/20/solid'
const Tweet = (Tweet: tweet) => {
  return (
    <div>
      <div className=' flex space-x-3'>
      <img src={Tweet.profileimg} className='h-10 w-10 rounded-full object-contain' alt='' />
      </div>

      <div className='items-center space-x-1'>
        <p>{Tweet.username}</p>
        <p>{Tweet.text}</p>
        
        <div>
         <img src={Tweet.img} className='max-h-60 object-contain' alt=''/>
        </div>
      </div>
      
      <div className='flex flex-row justify-between'>
        <div>
          <ChatBubbleBottomCenterIcon/>
        </div>

      </div>


    </div>
  )
}

export default Tweet

//if there is an img give me img 