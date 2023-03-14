import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// For future - Replace Crochet with the selected subreddit in the async bracket
 
export const loadCurrentSubreddit = createAsyncThunk(
  'NewSubreddit/loadNewSubreddit',
   async (sub) => {
    if (sub){
    const data = await fetch(`https://www.reddit.com/r/${sub}/.json?limit=50`)
    const json = await data.json();
    return json}

    else if (sub === undefined){
        const data = await fetch(`https://www.reddit.com/r/plants/.json?limit=50`)
        const json = await data.json();
    return json;
    };
    
  }
);

    

export const currentSubredditSlice = createSlice({
  name: 'currentSubreddit',
  initialState: {
    subreddit: [],
    isLoadingCurrentSubreddit: false,
    hasError: false
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
        state.subreddit = action.payload;
        
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

export default currentSubredditSlice.reducer;
