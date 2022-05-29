import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const getFavPhotosSlice = createSlice({
    name: "getFavPhotos",
    initialState,
    reducers: {
        photosAdded(state, action) {
            return [...state, action.payload];
        },
        photosRemoved(state, action) {
            return [...state].filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { photosAdded, photosRemoved } = getFavPhotosSlice.actions;
export default getFavPhotosSlice.reducer;
