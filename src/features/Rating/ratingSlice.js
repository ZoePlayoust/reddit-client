import { createSlice } from '@reduxjs/toolkit';

const ratingsSlice = createSlice({
  name: 'ratings',
  initialState: {},
  reducers: {
    incrementRating: (state, action) => {
      const { id } = action.payload;
      state[id] = (state[id] || 0) + 1;
    },
    decrementRating: (state, action) => {
      const { id } = action.payload;
      state[id] = Math.max((state[id] || 0) - 1, -1);
    },
    resetRating: (state, action) => {
      const { id } = action.payload;
      state[id] = 0;
    },
  },
});

export const { incrementRating, decrementRating, resetRating, selectRating } = ratingsSlice.actions;

export default ratingsSlice.reducer;