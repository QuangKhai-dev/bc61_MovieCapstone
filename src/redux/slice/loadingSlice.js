import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  count: 0,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    handleTurnOffLoading: (state, action) => {
      state.count -= 1;
      if (state.count == 0) {
        state.isLoading = false;
      }
    },
    handleTurnOnLoading: (state, action) => {
      // mở loading khi isLoading đang false
      if (!state.isLoading) {
        state.isLoading = true;
      }
      state.count += 1;
    },
  },
});

export const { handleTurnOffLoading, handleTurnOnLoading } =
  loadingSlice.actions;

export default loadingSlice.reducer;
