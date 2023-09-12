import { createSlice } from '@reduxjs/toolkit';
import {
  getAllAdverts,
  createAdvert,
  deleteAdvert,
  getAdvertById,
} from 'store/AsyncThunk/asyncThunkAdvert';

const initialState = {
  adverts: [],
  loading: false,
  error: null,
};

const advertSlice = createSlice({
  name: 'advert',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      //getAllAdverts===========================================================>
      .addCase(getAllAdverts.pending, state => {
        state.loading = true;
      })
      .addCase(getAllAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.adverts = action.payload;
        state.error = null;
      })
      .addCase(getAllAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //createAdverts===========================================================>

      .addCase(createAdvert.fulfilled, (state, action) => {
        state.loading = false;
        state.adverts.push(action.payload);
        state.error = null;
      })
      .addCase(createAdvert.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //deleteAdvert==========================================================>
      .addCase(deleteAdvert.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteAdvert.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.adverts = state.adverts.filter(el => el.id !== action.payload.id);
      })
      .addCase(deleteAdvert.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //getAdvertById===========================================================>
      .addCase(getAdvertById.pending, state => {
        state.loading = true;
      })
      .addCase(getAdvertById.fulfilled, (state, action) => {
        state.loading = false;
        // state.adverts = action.payload;
        state.error = null;
      })
      .addCase(getAdvertById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
// export const {} = advertSlice.actions;
export default advertSlice.reducer;
