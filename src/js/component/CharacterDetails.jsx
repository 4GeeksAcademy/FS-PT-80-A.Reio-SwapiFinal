import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/CharacterDetails.css";

export const CharacterDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(params);

    useEffect(() => {
        actions.loadPerson(params.uid);
    }, [params.uid]);

    return (
        <div className="character-container my-5 d-flex justify-content-center">
            <div 
                className="character-card p-4 shadow-lg" 
                style={{ maxWidth: "600px", backgroundColor: "#1a1a1a", borderRadius: "20px", color: "#ffffff" }}
            >
                <div className="character-text-center">
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} 
                        className="character-card-img-top mb-4" 
                        alt={store.person?.properties?.name} 
                        style={{ borderRadius: "15px", maxHeight: "400px", objectFit: "cover" }}
                    />
                </div>
                {store.person?.properties ? (
                    <>
                        <h2 className="character-text-warning character-text-center mb-3">
                            {store.person.properties.name}
                        </h2>
                        <p className="character-p"><strong>Height:</strong> {store.person.properties.height} cm</p>
                        <p className="character-p"><strong>Mass:</strong> {store.person.properties.mass} kg</p>
                        <p className="character-p"><strong>Skin Color:</strong> {store.person.properties.skin_color}</p>
                        <p className="character-p"><strong>Hair Color:</strong> {store.person.properties.hair_color}</p>
                    </>
                ) : (
                    <h2 className="character-text-center character-text-light">Gathering the force...</h2>
                )}
            </div>
        </div>
    );
};
