import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/PlanetDetails.css"

export const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(params);

    useEffect(() => {
        actions.loadPlanet(params.uid);
    }, [params.uid]);

    return (
        <div className="planet-container planet-my-5 planet-d-flex planet-justify-content-center">
            <div className="planet-card planet-p-4 planet-shadow-lg" style={{ maxWidth: "600px", backgroundColor: "#1a1a1a", borderRadius: "20px", color: "#ffffff" }}>
                <div className="planet-text-center">
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} 
                        className="planet-card-img-top planet-mb-4" 
                        alt={store.planet?.properties?.name} 
                        style={{ borderRadius: "15px", maxHeight: "400px", objectFit: "cover" }}
                    />
                </div>
                {store.planet?.properties ? (
                    <>
                        <h2 className="planet-text-warning planet-text-center planet-mb-3">{store.planet.properties.name}</h2>
                        <p><strong>Diameter:</strong> {store.planet.properties.diameter}</p>
                        <p><strong>Population:</strong> {store.planet.properties.population}</p>
                        <p><strong>Climate:</strong> {store.planet.properties.climate}</p>
                        <p><strong>Gravity:</strong> {store.planet.properties.gravity}</p>
                    </>
                ) : (
                    <h2 className="planet-text-center planet-text-light">Gathering the force...</h2>
                )}
            </div>
        </div>
    );
};
