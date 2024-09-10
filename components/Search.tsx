"use client"
import React, { useState } from 'react'
import Carlogo from '@/public/car-logo.png'
import Model from '@/public/model-icon.png'
import Image from 'next/image'
import MagGlass from '@/public/magnifying-glass.png' 
import { updateSearchParams } from '@/app/utils'
import { useRouter } from 'next/navigation'
const Search = () => {
    const router = useRouter()
    const [manufacturer,setManufacturer] = useState("")
    const [model,setModel] = useState("")
    const handleUpdateParams = (manufacturer:string,model:string) => {
        const NewPathName = updateSearchParams(manufacturer,model)
        router.push(NewPathName)
    }
  return (
    <div className='w-full flex items-center relative mt-[70px]'>
        <div className='h-full relative md:flex-row flex justify-around w-[100%] sm:flex-col'>
            <div className='inline relative w-[50%]'>
                <Image src={Carlogo} alt='car-logo' className='absolute h-[30px] w-[30px] left-[10px] ' />
            <input type='text' className='bg-gray-100 h-[30px] text-xs pl-[40px] focus: outline-none rounded-sm w-[100%] ml-[10px]' placeholder='Volksvagen' value={manufacturer} onChange={(e) => setManufacturer(e.target.value)}/>
            </div>
            <div className='inline relative w-[40%]'>
                <Image src={Model} alt='model' className='absolute inline h-[30px] w-[30px] left-[15px]'/>
            <input type='text' className='bg-gray-100 text-xs h-[30px] pl-[40px] focus: outline-none rounded-sm w-[100%] ml-[10px]'placeholder='Tiguan' value={model} onChange={(e) => setModel(e.target.value)}/>
            </div>
            <button className=' w-[30px]' >
                <Image src={MagGlass} alt='mag-glass' onClick={() => handleUpdateParams(manufacturer,model)}/>
            </button>
        </div>
    </div>
  )
}

export default Search