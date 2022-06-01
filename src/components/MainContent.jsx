import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/MainContent.module.scss";
import { getPhotos } from "../redux/selectors/getPhotosSelector";
import { fetchPhotos } from "../redux/asyncActions/fetchPhotos";
import { photosAdded, photosRemoved } from "../redux/reducers/getFavPhotosReducer";
import { getFavPhotos } from "../redux/selectors/getFavPhotosSelector";
import like from "../assets/images/heart.svg";
import likeActive from "../assets/images/heartFull.svg";

const MainContent = () => {
    const lastElement = useRef();
    const observer = useRef();

    const dispatch = useDispatch();

    const photos = useSelector(getPhotos);
    const favPhotos = useSelector(getFavPhotos);

    useEffect(() => {
        let callback = function (entries, observer) {
            if (entries[0].isIntersecting) {
                dispatch(fetchPhotos());
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current);
    }, []);

    const toggleFav = (photo) => {
        if (favPhotos.length) {
            favPhotos.some((item) => item.id === photo.id)
                ? dispatch(photosRemoved(photo))
                : dispatch(photosAdded(photo));
        } else dispatch(photosAdded(photo));
    };

    return (
        <div>
            <div className={styles.innerContainer}>
                <ul className={`${styles.picturesList} ${styles.listReset}`}>
                    {photos.map((item, i) => (
                        <li className={styles.picturesItem} key={item.id + i} onClick={() => toggleFav(item)}>
                            <img className={styles.img} src={item.url} width="224" height="224"></img>
                            <img
                                className={
                                    favPhotos.some((favItem) => favItem.id === item.id)
                                        ? `${styles.picturesLikeActive}`
                                        : `${styles.picturesLike}`
                                }
                                src={favPhotos.some((favItem) => favItem.id === item.id) ? likeActive : like}
                            ></img>
                        </li>
                    ))}
                </ul>
                <div className={styles.loadPhotos} ref={lastElement}>
                    {photos.length ? "Загружаем еще котиков..." : "Загружаем котиков..."}
                </div>
            </div>
        </div>
    );
};

export default MainContent;
