'use client'

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps{
    children:React.ReactNode;
    className?:string
}

const Header:React.FC<HeaderProps> = ({children,className}) => {
    const router=useRouter();
    const handleLogout=()=>{

    }
    return (
    <div className={twMerge(` h-fit bg-gradient-to-b from-[#0766AD] p-6 `,className)}>
        {/* the whole upperpart nav */}
        <div className=" w-full mb-4 flex items-center justify-between ">
          {/* for desktop */}
        <div className=" hidden md:flex gap-x-2 items-center ">
            <button 
            onClick={()=> router.back()}
            className=" transition rounded-full bg-black flex items-center justify-center hover:opacity-75">
                <RxCaretLeft size={35} className=" text-white"/>
            </button>
            <button
            onClick={()=> router.forward()}
            className=" transition rounded-full bg-black flex items-center justify-center hover:opacity-75">
                <RxCaretRight size={35} className=" text-white"/>
            </button>
        </div>
        {/* for mobile */}
        <div className=" flex md:hidden gap-x-2 items-center">
        <button className=" justify-center hover:opacity-75 transition flex items-center rounded-full p-2 bg-white">
            <HiHome className=" text-black "  size={20}/>
        </button>
        <button className=" justify-center hover:opacity-75 transition flex items-center rounded-full p-2 bg-white">
            <BiSearch className=" text-black "  size={20}/>
        </button>
        </div>
        {/* button */}
        <div className=" flex justify-between items-center gap-x-4">
        <>
        <div>
            <Button
            onClick={()=>{ }}
            className=" bg-transparent text-neutral-300 ">
                Sign up
            </Button>
        </div>
        <div>
            <Button 
            onClick={()=>{}}
            className=" px-6 bg-white text-black">
                Login
            </Button>
        </div>
        </>
        </div>
        </div>
        {/* children from the (root) */}
        {children}
    </div>
  )
}

export default Header