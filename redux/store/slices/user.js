import { createSlice } from "@reduxjs/toolkit";

export let userWalaSlice = createSlice({
    name:'user-slice',
    initialState:{
        city:'fsd',
        users:[         

        ]
    },
    // jab initital state(store kay data ko change krna ho)
    // to related functions ko reducers waley object m rakhi jyen
    // jab bhi dispatch() ke saath yeh function call krenge to 
    // wo yhana aakar call hojyega
    // for example, dispatch(createUser({name:'ali'}))

    reducers:{
    // actions
        createUser:(puranaData, nyaData)=>{
            
            puranaData.users.push(nyaData.payload);

                console.log(nyaData)

        },
        removeUser:(puranaData, nyaData)=>{
            
            puranaData.users.splice(nyaData.payload, 1 );

        },
        updateUser:(puranaData, nyaData)=>{

            // users[index] = user;
            puranaData.users[nyaData.payload.i] = nyaData.payload.user;


        }
    }
});


export let {createUser, removeUser, updateUser} = userWalaSlice.actions;