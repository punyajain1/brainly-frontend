import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useRef } from "react";
import axios from "axios";
import { backend_url } from "../config"
import { useNavigate } from "react-router-dom";

export function Signin(){
    const emailref = useRef<any>();
    const passref = useRef<any>();
    const navigate = useNavigate();



    async function signin(){
        const email = emailref.current?.value;
        const password = passref.current?.value;
        const response = await axios.post(backend_url+"/api/v1/signin",{
            email,
            password
        })
        const jwt = response.data.token;
        localStorage.setItem("authorization" , jwt);
        navigate("/dashboard");
    }

    return <>
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div className="bg-white rounded-xl min-w-48 p-8">
            <Input refrence = {emailref} placeholder="email"> </Input>
            <Input refrence = {passref}  placeholder="password"> </Input>
            <div className="flex justify-center pt-4">
                <Button onClick={signin} varient="primary" text="Signin" fullwidth={true}/>
            </div>

        </div>

    </div>
    </>
}