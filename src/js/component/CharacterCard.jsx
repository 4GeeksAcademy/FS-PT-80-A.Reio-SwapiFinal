import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const CharacterCard = (props) => {
    const { store, setStore, action } = useContext(Context);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/characterdetails/' + props.uid);
    };

    const handleFavorite = () => {
        if (!store.favorites.some(fav => fav.uid === props.uid)) {
            setStore({
                ...store,
                favorites: [...store.favorites, { uid: props.uid, name: props.name }]
            });
        }
    };

    return (
        <div className="character-col-sm-6 character-col-md-4 character-col-lg-3">
            <div className="character-card">
                <figure className="character-figure">
                    <img className="character-card-img-top" src={props.img} alt={props.name} />
                    <figcaption className="character-figcaption">{props.name}</figcaption>
                </figure>
                <div className="character-d-flex character-justify-content-between">
                    <button className="character-btn character-btn-primary" onClick={handleClick}>Learn More</button>
                    <button className="character-btn character-btn-light" onClick={handleFavorite}>Fav</button>
                </div>
            </div>
        </div>
    );
};