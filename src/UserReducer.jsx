import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, firstName, lastName, status } = action.payload;
      const user = state.find((user) => user.id === id);
      if (user) {
        user.firstName = firstName;
        user.lastName = lastName;
        user.status = status;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const index = state.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
