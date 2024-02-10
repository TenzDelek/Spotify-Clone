'use client'

import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import Sidebaritem from "./Sidebaritem";

interface SidebarProps{
    children:React.ReactNode
}

const Sidebar:React.FC<SidebarProps> = ({children}) => {
  const pathname=usePathname();
  const routes=useMemo(()=>[
    {
        icon:HiHome,
        label:'Home',
        active:pathname!=='/search',
        href:'/'
    },
    {
        icon:BiSearch,
        label:'Search',
        active:pathname==='/search',
        href:'/search'
    }
  ],[pathname]);
    return (
    <div className=" flex h-full">
        <div className=" hidden md:flex flex-col space-y-2 h-full w-[300px] p-2 bg-black">
        <Box>
            <div className=" flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item)=>(
              <Sidebaritem key={item.label} {...item} />
            ))}
            </div>
        </Box>
        <Box className=" overflow-y-auto h-full">
            SONG 
        </Box>
        </div>
    </div>
  )
}

export default Sidebar