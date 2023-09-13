import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const baseURL = 'https://6500383418c34dee0cd484f6.mockapi.io'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${baseURL}/contacts`);
            return response.data
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
);
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (removeId, { rejectWithValue }) => {
        try {
            const response = await fetch(`${baseURL}/contacts/${removeId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            const response = await fetch(`${baseURL}/contacts`, {
                name: `${contact.name}`,
                number: `${contact.number}`,
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, handlePending);
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload;
        });
        builder.addCase(fetchContacts.rejected, handleRejected);
        builder.addCase(deleteContact.pending, handlePending);
        builder.addCase(deleteContact.fulfilled, (state, action) => {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = state.contacts.items.filter(
                ({ id }) => id !== action.payload.id
            );
        });
        builder.addCase(deleteContact.rejected, handleRejected);
        builder.addCase(addContact.pending, handlePending);
        builder.addCase(addContact.fulfilled, (state, { payload: newContact }) => {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = [...state.contacts.items, newContact];
        });
        builder.addCase(addContact.rejected, handleRejected);
    },
});

export default contactsSlice.reducer;