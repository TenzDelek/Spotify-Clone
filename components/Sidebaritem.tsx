import Link from "next/link";
import { IconType } from "react-icons"
import { twMerge } from "tailwind-merge";
interface SidebaritemProps{
    icon:IconType;
    label:string;
    active?:boolean;
    href:string
}
const Sidebaritem:React.FC<SidebaritemProps> = ({icon,label,active,href}) => {
  return (
    <Link href={href} 
    className={twMerge(` transition py-1 text-neutral-400 hover:text-white flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer`
    ,active && 'text-white')}>
    Sidebar item
    </Link>
  )
}

export default Sidebaritem