import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';
import { contactsApi } from './contactsSlise';

export const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterReducer,
});
