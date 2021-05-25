import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categoriesSplice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});
