import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk('createUser', async(data, {rejectWithValue}) => {
    const response = await fetch('https://6509ba27f6553137159be7cd.mockapi.io/crud', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try{
        const result = await response.json();
        return result;
    }catch(error) {
        return rejectWithValue(error);
    }
});

export const showUser = createAsyncThunk('showUser', async(_args, {rejectWithValue}) => {
    const response = await fetch('https://6509ba27f6553137159be7cd.mockapi.io/crud')

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const usersDetails = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [createUser.pending]: (state) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [showUser.pending]: (state) => {
            state.loading = true;
        },
        [showUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [showUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export default usersDetails.reducer;