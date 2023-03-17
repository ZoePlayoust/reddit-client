import { configureStore } from '@reduxjs/toolkit';
import currentSubredditReducer from '../features/currentSubreddit/currentSubredditSlice'
import searchTermReducer from '../features/search/searchSlice';
import commentDisplayReducer from '../features/comments/commentsDisplaySlice';

export default configureStore({
  reducer: {
    currentSubreddit: currentSubredditReducer,
    searchTerm: searchTermReducer,
    commentDisplay: commentDisplayReducer,
   },
});
