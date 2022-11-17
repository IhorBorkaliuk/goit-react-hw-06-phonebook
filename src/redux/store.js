import { filterReducer } from "./filterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer
  },
});



const persistConfig = {
  key: 'root',
  storage,
};