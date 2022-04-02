import { createSlice } from '@reduxjs/toolkit';

const contactListFromStorage = () => {
  const contacts = localStorage.getItem('contacts');
  return contacts === null ? undefined : JSON.parse(contacts);
};

if (contactListFromStorage('contacts') === undefined) {
  localStorage.setItem('contacts', JSON.stringify([]));
}

const initialState = {
  contactList: contactListFromStorage('contacts'),
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    saveContact: (state, action) => {
      if (state.contactList.some(item => item.name === action.payload.name)) {
        alert(`${action.payload.name} is already on list!`);
      } else {
        state.contactList.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state.contactList));
      }
    },
    deleteContact: (state, action) => {
      const newList = state.contactList.filter(
        item => item.id !== action.payload.id
      );
      state.contactList = newList;
      localStorage.setItem('contacts', JSON.stringify(state.contactList));
    },

    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { saveContact, deleteContact, filterContacts } =
  contactSlice.actions;
export const selectContacts = state => state.contacts.contactList;
export const selectFilter = state => state.contacts.filter;

export default contactSlice.reducer;
