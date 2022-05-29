import FavPhotos from "../components/FavPhotos";
import MainContent from "../components/MainContent";

export const routes = [
    { path: "/", element: <MainContent />, exact: true },
    { path: "/favorite", element: <FavPhotos />, exact: true },
];
