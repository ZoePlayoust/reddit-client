import { configureStore } from '@reduxjs/toolkit';
import currentSubredditReducer from '../features/currentSubreddit/currentSubredditSlice'
import searchTermReducer from '../features/search/searchSlice';

export default configureStore({
  reducer: {
    currentSubreddit: currentSubredditReducer,
    searchTerm: searchTermReducer,
   },
});
