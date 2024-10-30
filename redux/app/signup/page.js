"use client";
import { useEffect, useRef, useState } from "react";

// import { users } from "../data";

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createUser, removeUser, updateUser } from "@/store/slices/user";
import { meraStore } from "@/store/store";


export default()=>{

    return <Provider store={meraStore}>
            <Signup></Signup>
    </Provider>

}

function Signup(){


    let dispatch =  useDispatch();
    let users = useSelector((store)=>{
        return store.users;
    })
    

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

            dispatch( updateUser({
                user,
                i: index
            }) );

            // users[index] = user;

        }else{
            
            // dispatch( createUser(user) );
            
            
            // dispatch( removeUser() );

            // users.push(user);

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