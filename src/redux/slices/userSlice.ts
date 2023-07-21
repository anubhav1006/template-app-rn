import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";
import axios from "axios";

type InitialState = {
  loading: boolean;
  user: User | null;
  error: string
};

const initialState: InitialState = {
  user: null,
  loading: false,
  error: ''
};

// Generates pending, fulfilled and rejected action types
export const fetchUser = createAsyncThunk("user/", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

export const createUser = createAsyncThunk("user/create", (user: User) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data);
});


export const editUser = createAsyncThunk("user/edit", (user: User) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true
    })
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false
        state.user = action.payload
        state.error = ''
      }
    )
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false
      state.user = null
      state.error = action.error.message || 'Something went wrong'
    })
    builder.addCase(createUser.pending, state => {
        state.loading = true
      })
      builder.addCase(
        createUser.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.loading = false
          state.user = action.payload
          state.error = ''
        }
      )
      builder.addCase(createUser.rejected, (state, action) => {
        state.loading = false
        state.user = null
        state.error = action.error.message || 'Something went wrong'
      })
      builder.addCase(editUser.pending, state => {
          state.loading = true
        })
        builder.addCase(
          editUser.fulfilled,
          (state, action: PayloadAction<User>) => {
            state.loading = false
            state.user = action.payload
            state.error = ''
          }
        )
        builder.addCase(editUser.rejected, (state, action) => {
          state.loading = false
          state.user = null
          state.error = action.error.message || 'Something went wrong'
        })
  }
});

export default userSlice.reducer;
