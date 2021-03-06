import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    data: [],
    meta: {
      page: 1,
      limit: 10,
      totalItem: 0
    }
  },
  reducers: {
    addEvents: (state, action)=> {
      return {
        ...state,
        ...action.payload,
      };
    },
  }
})


export const { addEvents } = eventSlice.actions;
export const selectEvents = (state) => state.event;

export default eventSlice.reducer;
