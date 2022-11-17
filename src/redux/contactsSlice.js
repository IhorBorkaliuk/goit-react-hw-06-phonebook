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
            return state.filter(contact => contact.id !== action.payload)
        }
    }
})

export const { addOneContact, deleteOneContact } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer
