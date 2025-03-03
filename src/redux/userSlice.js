import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'mail',
  initialState: {
    value : null,
  },
  reducers: {
    signin: (state,action) => {
      state.value= action.payload;
    },
    signout: (state) => {
      state.value = null;
    },
  },
});

export const { signin, signout } = userSlice.actions;
export const selectUser =(state) => state.user.value;
export default userSlice.reducer;

