import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const ShipCard = (props) => {
    const { store, setStore } = useContext(Context);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/shipdetails/' + props.uid);
    };

    const handleFavorite = () => {
        // Add the current item to favorites in the store
        setStore({
            favorites: [...store.favorites, { uid: props.uid, name: props.name }]
        });
    };

    return (
        <div className="ship-col-sm-6 ship-col-md-4 ship-col-lg-3">
            <div className="ship-card">
                <figure className="ship-figure">
                    <img className="ship-card-img-top" src={props.img} alt={props.name} />
                    <figcaption className="ship-figcaption">{props.name}</figcaption>
                </figure>
                <div className="ship-d-flex ship-justify-content-between">
                    <button className="ship-btn ship-btn-primary" onClick={handleClick}>Learn More</button>
                    <button className="ship-btn ship-btn-light" onClick={handleFavorite}>Fav</button>
                </div>
            </div>
        </div>
    );
};
