import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
    },
    reducers : {
        loadGptSearch : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
    }
});
export const { loadGptSearch } = gptSlice.actions;
export default gptSlice.reducer;