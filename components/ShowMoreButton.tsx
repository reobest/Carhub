"use client"
import React, { useState } from 'react'
import { updateSearchParams } from '@/app/utils'
import { useRouter } from 'next/navigation'
const ShowMoreButton = () => {
  const router = useRouter()
  const [limit,setLimit] = useState(10)
  const handleLimit = () => {
    setLimit(prev => prev + 10)
    const NewPathName = updateSearchParams(undefined,undefined,undefined,undefined,limit)
    router.push(NewPathName)
  }
  return (
    <button onClick={handleLimit} className='mt-[20px] ml-[50%] translate-x-[-50%] px-4 py-2 bg-blue-600 text-white border-2  rounded-md cursor-pointer text-center'>
        Show More
    </button>
  )
}

export default ShowMoreButton