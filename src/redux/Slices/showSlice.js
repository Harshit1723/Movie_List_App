import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchShows = createAsyncThunk(
    'shows/fetchshows', async() => {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();

        return data;
    }
);

export const getSummary = createAsyncThunk("user/getDetails",
async(id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await response.json();

    return data;
})

const showSlice = createSlice({
    name:'shows',
    initialState:{
        shows:[],
        detail:[],
        status:'idle',
        error:null,
    },reducers:{
        clearDetail:(state) => {
            state.detail=[];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShows.pending, (state) => {
            state.status='loading';
        })
        .addCase(fetchShows.fulfilled, (state,action) => {
            state.status = 'succeeded';
            state.shows=action.payload;
        })
        .addCase(fetchShows.rejected, (state,action) => {
            state.status='failed';
            state.error=action.error.message;
        })
        .addCase(getSummary.pending ,(state) => {
            state.status='loading';
        })
        .addCase(getSummary.fulfilled,(state,action) => {
            state.status='succeeded';
            state.detail=action.payload;
        })
        .addCase(getSummary.rejected, (state,action) => {
            state.status='failed';
            state.error=action.error.message;
        })
    }
});
export const {clearDetail}=showSlice.actions

export const getAllShows = (state) => state.shows.shows;
export const getDetail = (state) => state.shows.detail;

export const getStatus = (state) => state.shows.status;
export const getError = (state) => state.shows.error;
export default showSlice.reducer;