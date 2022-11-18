import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContactsState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addOneContact(state, action) {
      state.push({
        id: nanoid(),
        ...action.payload,
      });
    },

    deleteOneContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addOneContact, deleteOneContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
