import { useRef, useState } from "react";
import { Crosicon } from "../icons/crosicon";
import { Button } from "./Button";
import { Input } from "./Input";
import { Youtube } from "../icons/youtube";
import { X } from "../icons/twitter";
import axios from "axios";
import { backend_url } from "../config";

interface createcontentprops{
    open: boolean , 
    onClose: () => void
}

enum contenttype{
    Youtube = "youtube",
    Twitter = "twitter"
}

//@ts-ignore
export function ContentModal({open , onClose}: createcontentprops) {

    const titleref = useRef<HTMLInputElement>();
    const linkref = useRef<HTMLInputElement>();
    const[type , setType] = useState(contenttype.Youtube);
    
    async function addcontent(){
        const title = titleref.current?.value;
        const link = linkref.current?.value;

        await axios.post(backend_url+"/api/v1/content" , {
            link,
            type,
            title
        },{
            headers: {
                "Authorization": localStorage.getItem("authorization")
            }
        })
        onClose();

    }

    return (
        <div>
            {open && <div> 
            <div className="w-screen h-screen bg-slate-500 opacity-60 fixed top-0 left-0 flex justify-center">
                
            </div>


            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <Crosicon />
                        </div>
                    </div>
                    <div>
                        <Input refrence={titleref} placeholder={"Title"}></Input>
                        <Input refrence={linkref} placeholder={"Link"}></Input>
                    </div>
                    <div>
                        <h1 className="flex justify-center text-xl">Type</h1>
                        <div className="flex gap-1 p-4">
                            <Button text="Youtube" starticon={<Youtube/>} varient={type === contenttype.Youtube? "primary":"secondary"} onClick={()=>{setType(contenttype.Youtube);}}/>
                            <Button text="Twitter" starticon={<X/>} varient={type === contenttype.Twitter? "primary":"secondary"} onClick={()=>{setType(contenttype.Twitter);}}/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button onClick={addcontent} varient="primary" text="Submit" />
                    </div>
                </span>
                </div>    
            </div>
            </div>
            }
        </div>
    );
}