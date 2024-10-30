"use client";

import { useRouter } from "next/navigation";
import { users } from "../data"

export default()=>{

    let router=  useRouter();

    return <div>
        <table border="1">
            {
                users.map(function(user){
                    return <tr>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
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