import { configureStore } from '@reduxjs/toolkit';
import currentSubredditReducer from '../features/currentSubreddit/currentSubredditSlice'
import searchTermReducer from '../features/search/searchSlice';
import commentDisplayReducer from '../features/comments/commentsDisplaySlice';
import loadCommentsReducer from '../features/loadComments/loadCommentsSlice';
import ratingsReducer from '../features/Rating/ratingSlice';

export default configureStore({
  reducer: {
    currentSubreddit: currentSubredditReducer,
    searchTerm: searchTermReducer,
    commentDisplay: commentDisplayReducer,
    loadComments: loadCommentsReducer,
    ratings: ratingsReducer,
   },
});
