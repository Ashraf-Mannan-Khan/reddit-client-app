import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: "",
    reducers: {
        setSearchTerm: (state, action) => {
            return action.payload;
        },
        removeSearchTerm: (state, action) => {
            return '';
        }
    }
});


export const searchQuery = state => state.search;

export const {setSearchTerm, removeSearchTerm} = searchTermSlice.actions;
export default searchTermSlice.reducer;