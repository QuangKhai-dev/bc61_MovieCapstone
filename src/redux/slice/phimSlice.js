import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import { handleTurnOffLoading, handleTurnOnLoading } from './loadingSlice';

export const getMovieApiThunk = createAsyncThunk(
  'phim/getMovieApiThunk',
  async (maPhim, { dispatch }) => {
    dispatch(handleTurnOnLoading());
    const res = await quanLyPhimServ.layDanhSachPhim();
    dispatch(handleTurnOffLoading());
    console.log(maPhim);
    // trả về kết quả cần lưu trữ vào trong redux
    // console.log(res);
    return res.data.content; // [{"tenPhim","trailer","hot"}....]
  }
);

const initialState = {
  arrMovie: [],
};

const phimSlice = createSlice({
  name: 'phim',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // thành công
    builder.addCase(getMovieApiThunk.fulfilled, (state, action) => {
      console.log(action);
      state.arrMovie = action.payload;
    });
    // thất bại
    builder.addCase(getMovieApiThunk.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export const {} = phimSlice.actions;

export default phimSlice.reducer;
