import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUser } from './auth-operations';
import { loginSuccess, loginError } from './auth-actions';

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

    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },

    [loginSuccess](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [loginError](state, { payload }) {
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
