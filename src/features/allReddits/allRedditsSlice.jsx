import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllReddits = createAsyncThunk(
  "Reddit/fetchAllReddit",
  async () => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/proxy?url=/hot.json`);
    const jsonResponse = await response.json();
    return jsonResponse.data.children;
  },
);

export const fetchPostByQuery = createAsyncThunk('redditsPost/fetchPostByQuery', async(searchQuery, thunkApi) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/search?q=${searchQuery}&limit=20`);
    const jsonResponse = await response.json();
    return jsonResponse.data.children;
});

export const fetchPostByKeyword = createAsyncThunk('redditsPost/fetchPostByKeyword', async(keyword, thunkApi) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/proxy?url=/r/${keyword}.json`);
    const jsonResponse = await response.json();
    return jsonResponse.data.children;
});

const allRedditsSlice = createSlice({
  name: "allRedditsPost",
  initialState: {
    posts: [],
    isLoadingAll: false,
     isLoadingSearch: false,
     isLoadingKeyword: false,
    hasError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllReddits.pending, (state) => {
        state.isLoadingAll = true;
        state.posts =[];
        state.hasError = false;
      })
      .addCase(fetchAllReddits.fulfilled, (state, action) => {
        state.isLoadingAll = false;
        state.hasError = false;
        state.posts = action.payload;
      })
      .addCase(fetchAllReddits.rejected, (state, action) => {
        state.isLoadingAll = false;
        state.hasError = action.error.message;
      })
      .addCase(fetchPostByQuery.pending, (state) => {
            state.isLoadingSearch = true;
            state.posts =[];
            state.hasError = false;
        })
        .addCase(
            fetchPostByQuery.fulfilled, (state, action) => {
                state.isLoadingSearch = false;
                state.posts = action.payload;
                state.hasError = false;
            }
        )
        .addCase(
            fetchPostByQuery.rejected, (state, action) => {
                state.isLoadingSearch = false;
                state.hasError = action.message.error;
            }
        )
        .addCase(fetchPostByKeyword.pending, (state) => {
            state.isLoadingKeyword = true;
            state.posts =[];
            state.hasError = false;
        })
        .addCase(
            fetchPostByKeyword.fulfilled, (state, action) => {
                state.isLoadingKeyword = false;
                state.posts = action.payload;
                state.hasError = false;
            }
        )
        .addCase(
            fetchPostByKeyword.rejected, (state, action) => {
                state.isLoadingKeyword = false;
                state.hasError = action.message.error;
            }
        )
  },
});

export const redditData = (state) => state.allReddits.posts;
export const  loading = (state) => state.allReddits;
export default allRedditsSlice.reducer;
