import { ReactElement } from "react";

interface buttonprops{
    varient: "primary" | "secondary";
    text: string,
    starticon?: ReactElement,
    onClick?: ()=>void,
    fullwidth?: boolean,
    loading?: boolean
}

const varientclasses = {
    "primary": "bg-purple-600 text-white",
    "secondary" : "bg-purple-100 text-purple-600"
}

const defstyle="px-4 py-2 rounded-md font-light flex items-center"


export function Button({varient , text , starticon , fullwidth ,onClick , loading} : buttonprops){
    return <button onClick={onClick} className={varientclasses[varient] +" "+ defstyle+ " "+`${fullwidth? "w-full flex justify-center items-center" : ""} ${loading? "bg-red-300 disabled font-bold	"  : ""}`}>
        <div className="pr-2">
            {starticon}
        </div>
        {text}
    </button>
}