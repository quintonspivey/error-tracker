import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name:"users",
    initialState:[{}],
    reducers:{
        getUsers:(state)=>{
            state.push({name: "Quinton Spivey"}),
            state.push({name:"John Doe" })
        }
    }

})

export default slice.reducers;
export const{getUsers}= slice.actions;