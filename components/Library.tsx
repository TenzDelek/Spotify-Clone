'use client'

import { AiOutlinePlus } from "react-icons/ai"
import { TbPlaylist } from "react-icons/tb"

const Library = () => {
    const onClick=()=>{
        //handle upload later
        console.log("tenzin")
    }
  return (
    <div className=" flex flex-col">
         {/* for plus and the another div*/}
        <div className=" px-5 pt-4 flex items-center justify-between">
            {/* for the text and icon for it */}
            <div className=" inline-flex items-center gap-x-2 ">
                <TbPlaylist className=" text-neutral-400" size={26}/>
                    <p className=" text-neutral-400 font-medium text-md">Library for you</p>
           </div>
            <AiOutlinePlus
                size={20}
                className=" hover:text-white transition cursor-pointer text-neutral-400"
            onClick={onClick} />
        </div>
        <div className=" flex flex-col gap-y-2 mt-4 px-3">
            List of Songs
        </div>
    </div>
  )
}

export default Library