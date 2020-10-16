import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null
  },
  reducers: {
    setChannel : (state, action) => {
      state.app = action.payload;
    }
  },
});

export const { setChannel } = appSlice.actions;

export const channelId = state => state.app.channelId;
export const channelName = state => state.app.channelName;

export default appSlice.reducer;
