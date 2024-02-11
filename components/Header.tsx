'use client'

import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

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
        <div className=" w-full mb-4 flex items-center justify-between ">
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
        </div>
    </div>
  )
}

export default Header