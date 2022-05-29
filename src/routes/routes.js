import FavPhotos from "../components/FavPhotos";
import MainContent from "../components/MainContent";

export const routes = [
    { path: "/cat-app", element: <MainContent />, exact: true },
    { path: "/cat-app/favorite", element: <FavPhotos />, exact: true },
];
