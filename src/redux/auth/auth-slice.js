import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, _) {
      state.user = { name: '', email: '' };
      state.token = '';
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
