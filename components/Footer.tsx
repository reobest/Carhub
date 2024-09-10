import React from 'react'
import Logo from '@/public/logo.png'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='w-full h-[400px] flex justify-between xs:flex-col xs:items-center md:flex-row'>
       <div className='w-[200px] h-[200px] ml-[20px] mt-[40px]'>
        <Image src={Logo} alt="logo" className='w-[150px]'/>
        <p className='text-slate-400 mt-[10px] ml-[35px] text-xs'>Carhub2023</p>
        <p className='text-slate-400  ml-[35px] text-xs'>All rights reserved</p>
       </div>
       <div className='flex '>
        <ul className=' mx-[20px] mt-[20px] h-[200px] flex flex-col justify-evenly'>
          <li>About</li><li className='text-slate-600 text-xs'>How it works</li><li className='text-slate-600 text-xs'>Featured</li>
          <li className='text-slate-600 text-xs'>Partnership</li><li className='text-slate-600 text-xs'>Bussnies Relation</li>
        </ul>
        <ul className=' mx-[20px] mt-[20px] h-[200px] flex flex-col justify-evenly'>
        <li>Componey</li><li className='text-slate-600 text-xs'>Events</li><li className='text-slate-600 text-xs'>Blog</li>
        <li className='text-slate-600 text-xs'>Podcasts</li><li className='text-slate-600 text-xs'>Invite a Friend</li>
          </ul>
          <ul className=' mx-[20px] mt-[20px] h-[200px] flex flex-col justify-evenly'>
          <li>Socials</li><li className='text-slate-600 text-xs'>Discord</li><li className='text-slate-600 text-xs'>Telegram</li>
          <li className='text-slate-600 text-xs'>FaceBook</li><li className='text-slate-600 text-xs'>Instagram</li>
          </ul>
       </div>
    </div>
  )
}

export default Footer