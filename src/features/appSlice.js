import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },
  reducers: {
    setRoomID: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { setRoomID } = appSlice.actions;

export const selectRoomID = (state) => state.app.roomId;

export default appSlice.reducer;
