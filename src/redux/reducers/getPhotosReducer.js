import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const getPhotosSlice = createSlice({
    name: "getPhotos",
    initialState,
    reducers: {
        photosLoaded(state, action) {
            return [...state, ...action.payload];
        },
    },
});

export const { photosLoaded } = getPhotosSlice.actions;
export default getPhotosSlice.reducer;
