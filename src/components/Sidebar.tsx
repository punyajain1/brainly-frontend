import { Brain } from "../icons/brain";
import { X } from "../icons/twitter";
import { Youtube } from "../icons/youtube";
import { SidebarItem } from "./Sidebaritem";


export function Sidebar(){
    return <div className="h-screen bg-white border-2-bold position-fixed w-72 left-0 top-0 pl-6 position-absolute fixed ">
        <div className="flex text-2xl pt-4 items-center">
            <div className="pr-4">{<Brain /> }</div>
            Brainly
        </div>
        <div className="pt-4">
            <SidebarItem text="twitter" icon={<X />} />
            <SidebarItem text="Youtube" icon={<Youtube />} />
        </div>
    </div>
}