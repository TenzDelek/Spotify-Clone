'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps{
    image:string;
    name:string;
    href:string
}
const ListItem:React.FC<ListItemProps> = ({image,name,href}) => {
  const router=useRouter()
  const onClick=()=>{
    //add auth before push
    router.push(href)
  }
    return (
    <button onClick={onClick} className=" pr-4 transition overflow-hidden gap-x-4 hover:bg-neutral-100/20 bg-neutral-100/10 relative group flex items-center rounded-md">
        <div className=" relative min-h-[64px]  min-w-[64px]">
        <Image alt="liked" fill className=" object-cover" src={image} />
        </div>
        <p className=" font-medium truncate py-5">
            {name}
        </p>
        <div className=" hover:scale-110 right-5  group-hover:opacity-100 absolute transition opacity-0 rounded-full flex items-center justify-center bg-blue-100 p-4 drop-shadow-md">
            <FaPlay className=" text-black" />
        </div>
    </button>
  )
}

export default ListItem