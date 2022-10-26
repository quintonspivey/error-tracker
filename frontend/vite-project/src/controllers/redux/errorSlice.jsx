import {createSlice} from '@reduxjs/toolkit';
import  {retrieveBugs}  from '../bugController';


const slice = createSlice({
    name:'error',
    initialState: [],
    reducers:{

        getBugs:state=> retrieveBugs()

        ,
        createBugs:(state,action)=>{

        },
        updateBugs:(state,)=>{

        },
        markedComplete:(state,action)=>{

        }
    }
})

export default slice.reducers;

export const {getBugs,createBugs,updateBugs,markedComplete} =slice.actions;