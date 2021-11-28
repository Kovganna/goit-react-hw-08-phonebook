import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUp = createAsyncThunk('auth/signup', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/user/login', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    const { data } = await axios.post('/user/logout', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});
