"use client";

import { removeUser } from "@/store/slices/user";
import { meraStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { Provider, useDispatch, useSelector } from "react-redux";
// import { users } from "../data"

export default()=>{

    return <Provider store={meraStore}>
        <Users></Users>
    </Provider>

}


function Users(){

    let dispatch = useDispatch();
    let router=  useRouter();

    let data =  useSelector((store)=>{
        return store;
    })

    return<div>
        <h1>{data.city}</h1>
        <table border="1">
            {
                data.users.map(function(user, i){
                    return <tr>
                <td>{user.email}</td>
                        <td>{user.password}</td>

                        <td>
                            <button onClick={()=>{

                                dispatch( removeUser(i) );

                            }}>Delete</button>
                        </td>

                        <td>
                            <button onClick={()=>{
                                router.push('/signup?abc='+user.email)
                            }}>Edit</button>
                        </td>
                    </tr>
                })
            }
        </table>
    </div>


}