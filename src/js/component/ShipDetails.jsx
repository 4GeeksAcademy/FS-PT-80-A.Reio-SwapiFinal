import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/ShipDetails.css"


export const ShipDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(params);

    useEffect(() => {
        actions.loadShip(params.uid);
    }, [params.uid]);

    return (
        <div className="ship-container ship-my-5 ship-d-flex ship-justify-content-center">
            <div className="ship-card ship-p-4 ship-shadow-lg" style={{ maxWidth: "600px", backgroundColor: "#1a1a1a", borderRadius: "20px", color: "#ffffff" }}>
                <div className="ship-text-center">
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`} 
                        className="ship-card-img-top ship-mb-4" 
                        alt={store.ship?.properties?.name} 
                        style={{ borderRadius: "15px", maxHeight: "400px", objectFit: "cover" }}
                    />
                </div>
                {store.ship?.properties ? (
                    <>
                        <h2 className="ship-text-warning ship-text-center ship-mb-3">{store.ship.properties.name}</h2>
                        <p><strong>Starship Class:</strong> {store.ship.properties.starship_class}</p>
                        <p><strong>Manufacturer:</strong> {store.ship.properties.manufacturer}</p>
                        <p><strong>Max Atmosphering Speed:</strong> {store.ship.properties.max_atmosphering_speed}</p>
                        <p><strong>Hyperdrive Rating:</strong> {store.ship.properties.hyperdrive_rating}</p>
                    </>
                ) : (
                    <h2 className="ship-text-center ship-text-light">Gathering the force...</h2>
                )}
            </div>
        </div>
    );
};
