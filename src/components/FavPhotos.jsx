import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { photosRemoved } from "../redux/reducers/getFavPhotosReducer";
import { getFavPhotos } from "../redux/selectors/getFavPhotosSelector";
import styles from "../styles/FavPhotos.module.scss";
import likeActive from "../assets/images/heartFull.svg";

const FavPhotos = () => {
    const favPhotos = useSelector(getFavPhotos);

    const dispatch = useDispatch();

    const removeFav = (photo) => {
        dispatch(photosRemoved(photo));
    };

    return (
        <div>
            <div className={styles.innerContainer}>
                {favPhotos.length ? (
                    <ul className={`${styles.picturesList} ${styles.listReset}`}>
                        {favPhotos.map((item) => (
                            <li className={styles.picturesItem} key={item.id} onClick={() => removeFav(item)}>
                                <img className={styles.img} src={item.url} alt="favCat"></img>
                                <img className={styles.picturesLikeActive} src={likeActive} alt="like active"></img>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h2>Добавьте котиков!</h2>
                )}
            </div>
        </div>
    );
};

export default FavPhotos;
