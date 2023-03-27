import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from '../data/tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "nasa.png",
};
const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}


const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuitsArray,
 reducers: {
       deleteTuit(state, action) {
         const index = state.findIndex(tuit =>
               tuit._id === action.payload);
         state.splice(index, 1);
       },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },

    updateTuit(state, action){
     const tuit = state.find((tuit) =>
               tuit._id === action.payload._id)
         tuit.liked = !tuit.liked
         tuit.liked ? tuit.likes = tuit.likes + 1 : tuit.likes = tuit.likes - 1
     }
  }
});

export const {createTuit, deleteTuit, updateTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;