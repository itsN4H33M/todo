// store.js

import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice';

const persistedTasks = JSON.parse(sessionStorage.getItem('tasks')) || [];

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: {
    tasks: persistedTasks,
  },
});

export default store;
