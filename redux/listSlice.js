import { createSlice } from "@reduxjs/toolkit";


const listSlice= createSlice({
    name: "list",
    initialState: [
        {
            "id": 1,
            "title": "Test 1",
            "quantity": 1,
            "price":10000,
            "status": true
        },{
            "id": 2,
            "title": "Test 2",
            "quantity": 2,
            "price": 20000,
            "status": true
        },{
            "id": 3,
            "title": "Test 3",
            "quantity": 3,
            "price": 30000,
            "status": true
        }
    
    ], reducers:{
        addList:(state, action)=>{
            const newList ={
                id: state.length+1 ,
                title:action.payload.title,
                quantity:action.payload.quantity,
                price : action.payload.price,
            };
            state.push(newList);
        },
        updateList: (state, action) => {
            const index = state.findIndex((list) => list.id === action.payload.id);
            state[index].title = action.payload.title;
            state[index].quantity = action.payload.quantity;
            state[index].price = action.payload.price;
          },
        deleteList: (state, action) => {
            return state.filter((list)=> list.id !== action.payload.id);
        },
    }
})

export const {addList, updateList, deleteList} = listSlice.actions;


export default listSlice.reducer;