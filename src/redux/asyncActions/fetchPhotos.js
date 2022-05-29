import axios from "axios";
import { photosLoaded } from "../reducers/getPhotosReducer";

export const fetchPhotos = () => {
    return (dispatch) => {
        axios
            .get("https://api.thecatapi.com/v1/images/search?limit=30")
            .then((response) => dispatch(photosLoaded(response.data)));
    };
};
