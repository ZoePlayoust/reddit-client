import { configureStore } from '@reduxjs/toolkit';
import selectedSubredditReducer from '../features/selectedSubreddit/selectedSubredditSlice'
// import commentsReducer from '../features/comments/commentsDisplaySlice'
// import subredditListReducer from '../features/subredditList/subredditListDisplaySlice'

export default configureStore({
  reducer: {
    selectedSubreddit: selectedSubredditReducer,
    // comments:  commentsReducer, 
    // subredditList: subredditListReducer,

  },
});
