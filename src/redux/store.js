import { configureStore, combineReducers } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import newsSlice from './newsSlice';
import indispensableSlice from './indispensableSlice';
import dailiesSlice from './dailiesSlice';
import articleSlice from './articleSlice';

const rootReducer = combineReducers({
  app: appSlice.reducer,
  news: newsSlice.reducer,
  indispensable: indispensableSlice.reducer,
  dailies: dailiesSlice.reducer,
  article: articleSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
