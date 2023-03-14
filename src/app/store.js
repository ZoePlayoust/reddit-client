import { configureStore } from '@reduxjs/toolkit';
import currentSubredditReducer from '../features/currentSubreddit/currentSubredditSlice'
// import commentsReducer from '../features/comments/commentsDisplaySlice'
// import subredditListDisplayReducer from '../features/subredditList/subredditListDisplaySlice'

export default configureStore({
  reducer: {
    currentSubreddit : currentSubredditReducer,
    // subredditList: subredditListDisplayReducer,
    // comments:  commentsReducer, 
   

  },
});
