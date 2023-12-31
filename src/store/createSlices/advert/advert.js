import { createSlice } from '@reduxjs/toolkit';
import {
  getAllAdverts,
  getFilterAdverts,
  createAdvert,
  deleteAdvert,
  getAdvertById,
  allAdverts,
} from 'store/AsyncThunk/asyncThunkAdvert';

const initialState = {
  adverts: [],
  allAdverts: [],
  filterAdverts: [],
  advertsActive: [],
  isShowLinkLoader: false,

  loading: false,
  error: null,
};

const advertSlice = createSlice({
  name: 'advert',
  initialState,
  reducers: {
    setAdvertsActive: (state, action) => {
      state.advertsActive = [...state.advertsActive, action.payload];
    },
    deleteAdvertsActive: (state, action) => {
      state.advertsActive = state.advertsActive.filter(
        item => item.id !== action.payload.id
      );
    },
    resetFilterAdverts: state => {
      state.filterAdverts = [];
    },
  },

  extraReducers: builder => {
    builder
      //getAllAdverts===========================================================>
      .addCase(getAllAdverts.pending, state => {
        state.loading = true;
      })
      .addCase(getAllAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.isShowLinkLoader = action.payload.length === 8;
        const existingIds = state.adverts.map(advert => advert.id);
        const newAdverts = action.payload.filter(
          advert => !existingIds.includes(advert.id)
        );
        state.adverts = [...state.adverts, ...newAdverts];
        state.error = null;
      })
      .addCase(getAllAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //getFilterAdverts===========================================================>
      .addCase(getFilterAdverts.pending, state => {
        state.loading = true;
      })
      .addCase(getFilterAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.isShowLinkLoader = action.payload.length === 8;
        state.adverts = [];
        state.filterAdverts = [...action.payload];
        state.error = null;
      })
      .addCase(getFilterAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //AllAdverts===========================================================>
      .addCase(allAdverts.pending, state => {
        state.loading = true;
      })
      .addCase(allAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.allAdverts = action.payload;
        state.error = null;
      })
      .addCase(allAdverts.rejected, (state, action) => {
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
export const { setAdvertsActive, deleteAdvertsActive, resetFilterAdverts } =
  advertSlice.actions;
export default advertSlice.reducer;
