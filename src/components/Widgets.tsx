import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Profile from '@/ui/Profile'
const Widgets = () => {
  return (
    <div className='px-2 col-span-2 hidden lg:inline '>
    <div className='flex items-center rounded-full space-x-2 bg-gray-200 mb-2  '>
        <MagnifyingGlassIcon className=' text-gray-600 h-4 w-5'/> 
        <input placeholder='Search' type='text' className='bg-transparent outline-none flex-1'/>`
    </div>
    <Profile/>
    </div>

  )
}

export default Widgets