import axios from "axios";
import { photosLoaded } from "../reducers/getPhotosReducer";

export const fetchPhotos = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=50");
            dispatch(photosLoaded(response.data));
        } catch (e) {
            console.log(e);
        }
    };
};
