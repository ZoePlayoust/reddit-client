import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadCurrentComment = createAsyncThunk(
  'NewComment/loadNewComment',
  async ({sub, id}) => {
      const data = await fetch(`https://www.reddit.com/r/${sub}/comments/${id}/.json`);
    const json = await data.json();
    return [json, id, sub];
    
  }
);
    

export const loadCommentsSlice = createSlice({
  name: 'loadComment',
  initialState: {
    commentsLoaded: {},
    isLoadingCurrentComment: false,
    hasError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCurrentComment.pending, (state) => {
        state.isLoadingCurrentComment = true;
        state.hasError = false;
      })
      .addCase(loadCurrentComment.fulfilled, (state, action) => {
        state.isLoadingCurrentComment = false;
        state.hasError = false;
        const [json, id, sub] = action.payload;
        state.commentsLoaded = {
          ...state.commentsLoaded,
          [sub]: {
            ...state.commentsLoaded[sub],
            [id]: json[1].data.children
          }
        };
      })
      .addCase(loadCurrentComment.rejected, (state) => {
        state.isLoadingCurrentComment = false;
        state.hasError = true;
        state.commentsLoaded = {};
      });
  },
});

export const selectLoadedComment = (state) => state.loadComments.commentsLoaded;

export const isLoadingComments = (state) => state.loadComments.isLoadingComments;

export default loadCommentsSlice.reducer;