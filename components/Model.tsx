"use client"
import React from 'react'
import pattern from '@/public/pattern.png'
import car from '@/public/hero.png'
import Image from 'next/image';
import X from '@/public/R-removebg-preview.png'
import { ModalProps } from '@/types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, cars }) => {
  if (!isOpen) return null;
  return (
    <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-slate-400">
      <div className="w-[500px] h-[90%] bg-white rounded-md flex flex-col items-center">
        <div className='w-full h-[250px]'>
          <div className='h-2/4 relative'>
            <Image src={pattern} alt='pattern' className='absolute h-full top-0 bottom-0 left-0 right-0' />
            <Image src={car} alt='car' className='h-full absolute w-[50%] left-2/4 translate-x-[-50%]' width={500} height={300} />
          </div>
          <div className='h-2/4 w-full flex items-center justify-around'>
            <Image src={car} alt='car' className='h-3/4 w-[100px]' />
            <Image src={car} alt='car' className='h-3/4 w-[100px]' />
            <Image src={car} alt='car'  className='h-3/4 w-[100px]' />
          </div>
        </div>
        <div className='w-full'>
          <p className='px-2 text-[20px] font-medium'>{cars?.make} {cars?.model}</p>
          <p className='flex w-full items-center justify-between px-2'><span>city_mpg:</span><span>{cars?.city_mpg}</span></p>
          <p className='flex w-full items-center justify-between px-2'><span>class:</span><span>{cars?.class}</span></p>
          <p className='flex w-full items-center justify-between px-2'><span>combination_mpg:</span><span>{cars?.combination_mpg}</span></p>
          <p className='flex w-full items-center justify-between px-2'><span>cylinders:</span><span>{cars?.cylinders}</span></p>
          <p className='flex w-full items-center justify-between px-2'><span>displacement:</span><span>{cars?.displacement}</span></p>
          <p className='flex w-full items-center justify-between px-2'><span>drive:</span><span>{cars?.drive}</span></p>
          <p className='flex w-full items-center justify-between px-2'><span>fuel_type:</span><span>{cars?.fuel_type}</span></p>
          <p className='flex w-full items-center justify-between px-2'><span>highway_mpg:</span><span>{cars?.highway_mpg}</span></p>
          <p className='flex w-full items-center justify-between px-2'><span>transmission:</span><span>{cars?.transmission}</span></p>
          <p className='flex w-full items-center justify-between px-2'><span>year:</span><span>{cars?.year}</span></p>
        </div>

      </div>
      <Image src={X} onClick={onClose} alt='close' className='w-[50px] h-[50px] absolute right-2 top-2 text-white cursor-pointer' />
    </div>
  );
};

export default Modal