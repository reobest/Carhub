import Image from "next/image"
import Link from "next/link"
import Logo from '@/public/logo.png'
const Navbar = () => {
  return (
    <div className="w-full h-12 flex items-center justify-between px-6">
        <Image
        alt="logo"
        src={Logo}
        className="w-24 h-4"
        />
        <Link href={`/`} className="text-cyan-600">Sign In</Link>
    </div>
  )
}

export default Navbar