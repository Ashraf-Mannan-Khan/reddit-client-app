import { createSlice } from "@reduxjs/toolkit";

const keywordSlice = createSlice({
    name: 'keyword',
    initialState: "",
    reducers: {
        setKeyword: (state, action) => {
            return action.payload;
        }
    }
});


export const keyword = state => state.keyword;

export const {setKeyword} = keywordSlice.actions;
export default keywordSlice.reducer;

