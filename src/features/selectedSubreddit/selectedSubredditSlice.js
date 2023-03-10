import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// For future - Replace Crochet with the selected subreddit in the async bracket
 
    export const loadSelectedSubreddit = createAsyncThunk(
      'selectedSubreddit/loadSelectedSubreddit',
      async () => {
        const data = await fetch('https://www.reddit.com/r/crochet/.json?limit=50');
        const json = await data.json();
        return json;
      }
    );
    

export const selectedSubredditSlice = createSlice({
  name: 'selectedSubreddit',
  initialState: {
    subreddit: [],
    isLoadingSelectedSubreddit: false,
    hasError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSelectedSubreddit.pending, (state) => {
        state.isLoadingSelectedSubreddit = true;
        state.hasError = false;
      })
      .addCase(loadSelectedSubreddit.fulfilled, (state, action) => {
        state.isLoadingSelectedSubreddit = false;
        state.hasError = false;
        state.subreddit = action.payload;
        
      })
      .addCase(loadSelectedSubreddit.rejected, (state) => {
        state.isLoadingSelectedSubreddit = false;
        state.hasError = true;
        state.subreddit = {};
      })
  },
});

export const selectSelectedSubreddit = (state) => state.selectedSubreddit.subreddit;
export const isLoadingSelectedSubreddit = (state) => state.selectedSubreddit.isLoadingSelectedSubreddit;

export default selectedSubredditSlice.reducer;
