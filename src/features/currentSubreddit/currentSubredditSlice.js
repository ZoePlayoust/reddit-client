import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';

 
export const loadCurrentSubreddit = createAsyncThunk(
  'NewSubreddit/loadNewSubreddit',
  async (sub = 'plants') => {
    const data = await fetch(`https://www.reddit.com/r/${sub}/.json?limit=20`);
    const json = await data.json();
    return json;
  }
);
    
export const currentSubredditSlice = createSlice({
  name: 'currentSubreddit',
  initialState: {
    subreddit: [],
    isLoadingCurrentSubreddit: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCurrentSubreddit.pending, (state) => {
        state.isLoadingCurrentSubreddit = true;
        state.hasError = false;
      })
      .addCase(loadCurrentSubreddit.fulfilled, (state, action) => {
        state.isLoadingCurrentSubreddit = false;
        state.hasError = false;
        state.subreddit = action.payload.data.children;
      })
      .addCase(loadCurrentSubreddit.rejected, (state) => {
        state.isLoadingCurrentSubreddit = false;
        state.hasError = true;
        state.subreddit = {};
      })
  },
});

export const selectCurrentSubreddit = (state) => state.currentSubreddit.subreddit;

export const isLoadingCurrentSubreddit = (state) => state.currentSubreddit.isLoadingCurrentSubreddit;

export const { searchFilter } = currentSubredditSlice.actions;

export default currentSubredditSlice.reducer;