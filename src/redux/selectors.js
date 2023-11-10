export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const selectContacts = state => state.contactsStore.contacts.items;

export const selectContactsIsLoading = state =>
  state.contactsStore.contacts.isLoading;

export const selectContactsError = state => state.contactsStore.contacts.error;

export const selectContactsFilterTerm = state => state.contactsStore.filter;
