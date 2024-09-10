"use client"
import React , {useState,useEffect} from 'react'
import Image from 'next/image'
import Steering from '@/public/steering-wheel (1).png'
import Car from '@/public/hero.png'
import Gas from '@/public/gas.png'
import Tire from '@/public/tire.png'
import { CarType } from '@/types'
import CusButton from './CusButton'
import { calculateCarRent , generateCarImageUrl } from '@/app/utils'
const Card = ( { car , openModal  }: {car : CarType ,openModal : any }) => {
  
  const [UrL, setUrL] = useState("")
  const FetchData = async () => {
    const res = await generateCarImageUrl(car?.make+" "+car.model)
    setUrL(res)
  }
  
  useEffect(() => {
    FetchData()
  }, []);
  let Carrent = calculateCarRent(car.city_mpg,car.year)
  return (
    <div className='md:w-[500px] h-auto flex flex-wrap justify-center items-center mt-[50px] xs:w-[400px]' >
      <div className='w-[500px] h-[480px] bg-slate-200 rounded-md'>
        <h3 className='w-full pl-2 font-medium text-[30px] mt-[20px]'>{car.model}</h3>
        <div className='flex flex-col w-full mt-[20px] leading-5'>
          <p className='pl-[19px] text-sm'>$</p>
          <p className='pl-[25px] font-medium text-[30px]'>{Carrent}</p>
          <p className='pl-[55px] text-sm'>/day</p>
        </div>
        <div className='w-full h-[200px] flex justify-center'>
          <Image src={UrL || Car}  alt='hero-car' className='h-full w-[100%]' width={200} height={100}/>
        </div>
        <div className='w-full flex justify-between mt-[30px] px-[10px]'>
          <div className='flex flex-col items-center'>
            <Image src={Steering} alt='sterring-weel' />
            {car.transmission == "a" ? "Automatic" : "Manual" }
          </div>
          <div className='flex flex-col items-center'>
            <Image src={Tire} alt='tire' className='w-[20px] h-[20px]'/>
           {car.drive}
          </div>
          <div className='flex flex-col items-center'>
            <Image src={Gas} alt='gas' />
            {car.combination_mpg}Mpg
          </div>
        </div>
        <CusButton title='See The Car' handleClick={openModal} containerStyles='rounded-md mt-[15px] mx-auto w-[95%] px-[10px] flex text-white bg-blue-600 items-center justify-center h-[40px]'/>
      </div>
    </div>
  )
}

export default Card

