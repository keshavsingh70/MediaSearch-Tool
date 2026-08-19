import { createSlice } from "@reduxjs/toolkit";

import { toast, Zoom } from "react-toastify"; 

const initialState ={
    items:JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice= createSlice({
    name:'collection',
    initialState,
    reducers:{
        addCollection:(state,action)=>{
            const alreadyExists=state.items.find(
                item => item.id == action.payload.id
            )
            if(!alreadyExists){
                state.items.push(action.payload);
                localStorage.setItem('collection',JSON.stringify(state.items))
            }
          

        },
        removeCollection:(state,action)=>{
            state.items=state.items.filter(
                item =>item.id != action.payload
            )
            localStorage.setItem('collection',JSON.stringify(state.items))
    },
        clearCollection:(state,action)=>{
            state.items =[]
            localStorage.removeItem('collection')
    },
    addedToast:()=>{
toast.success('🦄 Added To Collection', {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Zoom,
});

    },
    removeToast:()=>{
toast.success('🦄 Removed', {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Zoom,
});

    }
 }
})
export const  {
addCollection,removeCollection,addedToast,removeToast,clearCollection
 } = collectionSlice.actions;
export default collectionSlice.reducer;
