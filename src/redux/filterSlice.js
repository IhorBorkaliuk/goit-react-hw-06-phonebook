import { createSlice } from '@reduxjs/toolkit';


const initialFilterState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    contactsFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { contactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
