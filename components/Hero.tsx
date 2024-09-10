
import HeroBackGround from '@/public/hero-bg.png'
import HeroCar from '@/public/hero.png'
import Image from 'next/image'
import { CusButton } from '.'
const Hero = () => {
    return (
        <div className="flex flex-wrap justify-center ">
            <div className="h-[560px] md:h-auto lg:w-1/2 md:w-full flex flex-col  box-border p-4 border-black">
                <h1 className="text-6xl mt-16 ">Find, Book, Rent a car - quickly and easly</h1>
                <p className="text-s text-gray-700 mt-4  w-full flex justify-center">Streamline your car rental experience with our effortless booking
                    process.</p>
                    <CusButton title='Explore Cars' containerStyles='bg-cyan-600 text-zinc-50 rounded-md text-xs p-2 mt-16 w-[300px] h-[40px] sm: mx-auto my-[60px]'/>
            </div>
            <div className='lg:w-1/2  md:w-full  h-[560px] relative sm:w-full xs:w-full '>
                <Image alt='her-background' src={HeroBackGround} className='absolute bottom-0 w-2/3 h-full right-0 '/>
                <div className='absolute bottom-0 left-0 w-11/12 h-4/5'>
                    <Image alt='hero-car' src={HeroCar} className='object-contain h-[100%]'/>
                </div>
            </div>
        </div>
    )
}

export default Hero