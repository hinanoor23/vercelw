"use client";
import { useRef } from "react";
import { users } from "../data";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// nested-routing

export default()=>{

    // programmtically router change krne keliye
    // useRouter() ka hook hota
    let router = useRouter();

    let passwordRef = useRef();
    let emailRef = useRef();
    
    const saveUser = ()=>{
        
        let userMilgya = users.find(function(user){

            if(user.email == emailRef.current.value && user.password == passwordRef.current.value){
                return true;
            }

        })

        if(userMilgya){
            router.push('/dashboard')
        }else{
            toast.error("user nahi mila");
        }

    }

    return <div>
        <input placeholder="Email" ref={emailRef} /> <br/>
        <input placeholder="Password" ref={passwordRef} /> <br/>
        <button onClick={saveUser}>Save User</button>
    </div>

}