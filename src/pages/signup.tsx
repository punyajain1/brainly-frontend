import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { backend_url } from "../config";
import { useNavigate } from "react-router-dom";
 
export function Signup(){
    const emailref = useRef<any>();
    const passref = useRef<any>();
    const navigate = useNavigate();
    async function signup(){
        const email = emailref.current?.value;
        const password = passref.current?.value;
        await axios.post(backend_url+"/api/v1/signup",{
            email,
            password
        })
        alert("You Have SignedUP!!!!!!!!!");
        navigate("/signin");
    }

    return <>
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div className="bg-white rounded-xl min-w-48 p-8">
            <Input refrence ={emailref} placeholder="email"> </Input>
            <Input refrence ={passref} placeholder="password"> </Input>
            <div className="flex justify-center pt-4">
                <Button onClick={signup} loading={false} varient="primary" text="Signup" fullwidth={true}/>
            </div>

        </div>

    </div>
    </>
}