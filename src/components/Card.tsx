import { Bin } from "../icons/bin";
import { Shareicon } from "../icons/shareicon";
import { X } from "../icons/twitter";
import { Youtube } from "../icons/youtube";
interface cardprops{
    title: string,
    links : string,
    type : "youtube" |  "twitter"

}

export function Card({links , title , type} : cardprops){
    return <div>
        <div className="p-4 bg-white rounded-md border border-gray-200 max-w-72 min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                    {type === "youtube" ? <Youtube /> : type === "twitter" ? <X /> : <Bin />}
                        
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500" >
                        <a href= {links} target="_blank" rel="noopener noreferrer">
                        {<Shareicon />}
                        </a>
                    </div>
                    <div className="text-gray-500" onClick={()=>{
                        
                    }}>
                        {<Bin />}
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {type === "youtube" && links && (
                    <iframe
                        className="w-full"
                        src={links.includes("youtube.com/watch?v=")? links.replace("watch?v=", "embed/"): links.    includes("youtu.be/") ? `https://www.youtube.com/embed/${links.split("/").pop()?.split("?")[0]}`: ""}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                )}


                {type ==="twitter" && <blockquote className="twitter-tweet">
                <a href={links.replace("x","twitter")}></a> 
                </blockquote>}
            </div>
        </div>
    </div>
}