import { createSlice } from '@reduxjs/toolkit';

export const commentDisplaySlice = createSlice({
  name: 'commentDisplay',
  initialState: {
    comments: {
    }
  },
  reducers: {
    addCommentDisplay: (state, action) => {
      const { id, subreddit } = action.payload;
    
      if (!state.comments[subreddit]) {
        state.comments[subreddit] = {};
      }
      state.comments[subreddit][id] = { isOpened: true };
    },

    toggleCommentDisplay: (state, action) => {
  const { id, subreddit } = action.payload;

  state.comments[subreddit][id].isOpened = !state.comments[subreddit][id].isOpened; 
    }
  }
});

export const selectComment = (state) => state.commentDisplay.comments;

export const { addCommentDisplay, toggleCommentDisplay } = commentDisplaySlice.actions;

export default commentDisplaySlice.reducer;