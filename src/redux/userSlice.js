import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users", async () => {
  const resp = await fetch("https://gorest.co.in/public/v2/users");
  const jsonRes = await resp.json();
  return jsonRes;
});

const initialState = {
  items: [],
  status: undefined,
  error: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
  },
});

export default userSlice.reducer;
