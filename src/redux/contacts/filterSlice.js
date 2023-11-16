import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = "";

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContact(_, { payload }) {
      return payload;
    },
  },
});

// To generate action-creators
export const { filterContact } = filterSlice.actions;
// Reducer of slice
export const filterReducer = filterSlice.reducer;
