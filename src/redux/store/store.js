import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getFavPhotosSlice } from "../reducers/getFavPhotosReducer";
import { getPhotosSlice } from "../reducers/getPhotosReducer";

const reducers = {
    getPhotos: getPhotosSlice.reducer,
    getFavPhotos: getFavPhotosSlice.reducer,
};

const rootReducer = combineReducers({
    ...reducers,
});

export const store = configureStore({
    reducer: rootReducer,
});
