import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : [],
};

const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addU: (state, action) => {
      // state.value += 1;
      //   console.log(action.payload);
      state.items.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.items));
    },
    delU: (state, action) => {
      /* if (state.value > 0) {
        state.value -= 1;
      } */
      const userData = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
      state.items = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    },
    removeAllUser: (state) => {
      state.items = [];
    },
  },
});

export const { addU, delU, removeAllUser } = userInfo.actions;
export default userInfo.reducer;
