
import { configureStore } from '@reduxjs/toolkit';
import mailSlice from './mailSlice'; // Example slice

const store = configureStore({
  reducer: {
    mail:mailSlice, // Add slices here
  },
});

export default store;