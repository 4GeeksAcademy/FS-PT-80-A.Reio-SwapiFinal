import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const PlanetCard = (props) => {
    const { store, setStore } = useContext(Context);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/planetdetails/' + props.uid);
    };

    const handleFavorite = () => {
        // Add the current item to favorites in the store
        setStore({
            favorites: [...store.favorites, { uid: props.uid, name: props.name }]
        });
    };

    return (
        <div className="planet-col-sm-6 planet-col-md-4 planet-col-lg-3">
            <div className="planet-card">
                <figure className="planet-figure">
                    <img className="planet-card-img-top" src={props.img} alt={props.name} />
                    <figcaption className="planet-figcaption">{props.name}</figcaption>
                </figure>
                <div className="planet-d-flex planet-justify-content-between">
                    <button className="planet-btn planet-btn-primary" onClick={handleClick}>Learn More</button>
                    <button className="planet-btn planet-btn-light" onClick={handleFavorite}>Fav</button>
                </div>
            </div>
        </div>
    );
};
