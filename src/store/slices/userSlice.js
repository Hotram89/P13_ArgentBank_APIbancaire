import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: undefined },
  reducers: {
    saveUser: (state, action) => {
      state.value = action.payload;
    },
    deleteUser: (state) => {
      state.value = undefined;
    },
  },
});

export const { saveUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
