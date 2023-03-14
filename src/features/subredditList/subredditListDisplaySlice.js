import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';



 
export const loadNewSubreddit = createAsyncThunk(
      'NewSubreddit/loadNewSubreddit',
      async (sub) => {
        if (sub){
        const data = await fetch(`https://www.reddit.com/r/${sub}/.json?limit=50`)
    return data}

        else if (sub === null){
            const data = await fetch(`https://www.reddit.com/r/plants/.json?limit=50`)
            return data
        };
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
