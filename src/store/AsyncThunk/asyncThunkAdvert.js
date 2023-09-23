import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://648f0aa075a96b6644449db2.mockapi.io';

const getAllAdverts = createAsyncThunk('advert/getAdverts', async page => {
  try {
    const response = await axios.get(
      `${BASE_URL}/adverts/?page=${page}&limit=8`
    );
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error('Failed get adverts');
  }
});
const getFilterAdverts = createAsyncThunk(
  'advert/getFilterAdverts',
  async params => {
    const make = params.params.brand ? `&make=${params.params?.brand}` : '';
    const price = params.params.price
      ? `&rentalPrice_lte=${params.params?.price}`
      : '';
    const mileageMin = params.params.from
      ? `&mileage_gte=${params.params?.from}`
      : '';
    const mileageMax = params.params.to
      ? `&mileage_lte=${params.params?.to}`
      : '';
    try {
      const response = await axios.get(
        `${BASE_URL}/adverts/?page=${params.page}&limit=8${make}${price}${mileageMin}${mileageMax}`
      );
      const { data } = response;
      return data;
    } catch (error) {
      throw new Error('Failed get adverts');
    }
  }
);
const allAdverts = createAsyncThunk('advert/getAll', async page => {
  try {
    const response = await axios.get(`${BASE_URL}/adverts/`);
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

export {
  getAllAdverts,
  getFilterAdverts,
  createAdvert,
  deleteAdvert,
  getAdvertById,
  allAdverts,
};
