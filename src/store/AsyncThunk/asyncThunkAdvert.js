import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://648f0aa075a96b6644449db2.mockapi.io';

const getAllAdverts = createAsyncThunk('advert/getAdverts', async () => {
  try {
    const response = await axios.get(`${BASE_URL}/adverts`);
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error('Failed get adverts');
  }
});

const createAdvert = createAsyncThunk('advert/postAdvert', async params => {
  try {
    const response = await axios.post(`${BASE_URL}/adverts`, params);
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error('Failed to post new advert');
  }
});

const deleteAdvert = createAsyncThunk('advert/deleteAdvert', async advertId => {
  try {
    const response = await axios.delete(`${BASE_URL}/adverts/${advertId}`);
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error('Failed delete Advert');
  }
});

const getAdvertById = createAsyncThunk(
  'advert/getAdvertById',
  async advertId => {
    try {
      const response = await axios.get(`${BASE_URL}/adverts/${advertId}`);
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error('Failed get advert by id');
    }
  }
);

export { getAllAdverts, createAdvert, deleteAdvert, getAdvertById };
