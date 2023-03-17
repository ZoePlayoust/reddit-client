import { createSlice } from '@reduxjs/toolkit';

export const commentDisplaySlice = createSlice({
  name: 'commentDisplay',
  initialState: {
    comments: {
      0: { isOpened: true }
    }
  },
  reducers: {
    addCommentDisplay: (state, action) => {
      const { id } = action.payload;
      state.comments[id] = { isOpened: true };
    },
    toggleCommentDisplay: (state, action) => {
      const { id } = action.payload;
      state.comments[id].isOpened = !state.comments[id].isOpened;
    }
  }
});

export const selectComment = (state) => state.commentDisplay.comments;

export const { addCommentDisplay, toggleCommentDisplay } = commentDisplaySlice.actions;

export default commentDisplaySlice.reducer;