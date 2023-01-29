import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';

export const store = configureStore({
  reducer: combineReducers({
    cart: cartReducer,
  }),
});
