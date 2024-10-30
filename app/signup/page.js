"use client";
import { useEffect, useRef, useState } from "react";
import { users } from "../data";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

export default()=>{

    let emailRef = useRef();
    let passwordRef = useRef();

    let [index, setIndex] = useState();

    let {register, handleSubmit, reset} = useForm();

    let params = useSearchParams();

    let userEmail = params.get('abc')

    useEffect(()=>{

        let userMigya = users.find(function(user){
            if(user.email == userEmail){
                return true;
            }
        });
    
        
        if(userMigya){
            
            let userKaindex = users.indexOf(userMigya);
            setIndex(userKaindex);

            reset(userMigya)
        }

        console.log(userMigya)

    }, [])

    console.log(params.get('abc'))

    const saveUser = (user)=>{

        
        if(userEmail){

            users[index] = user;

        }else{
            users.push(user);
        }

        console.log(user);

    }

    return <div>
        <form onSubmit={handleSubmit(saveUser)}>
            <input {...register('email')} placeholder="Email" /> <br/>
            <input {...register('password')}  placeholder="Password" /> <br/>
            <button>Save User</button>
        </form>
    </div>

}