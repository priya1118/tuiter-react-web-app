import { createSlice } from "@reduxjs/toolkit";
import currentUser from "../data/user.json";

const userSlice = createSlice({
 name: "user",
 initialState: {user:currentUser},
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload.profile

    }
  }
});

//actions
export const updateUserProfile = (profile ) => async dispatch => {
  try {
    // await api.post('/api/auth/login/', { username, password })
    dispatch(updateUser({profile}));
  } catch (e) {
    console.log(e.message)
    return console.error(e.message);
  }
}

export const {updateUser} = userSlice.actions;
export default userSlice.reducer;
