import { ReactElement } from "react";

export function SidebarItem({text , icon } : {
    text: string;
    icon: ReactElement;
}): ReactElement {
    return (
        <div className="flex py-2 text-gray-700 cursor-pointer hover:bg-pink-100 rounded max-w-48 pl-4 duration-1000 ">
            <div className="pr-2 ">{icon}</div>
            <div >{text}</div>
        </div>
    );
}