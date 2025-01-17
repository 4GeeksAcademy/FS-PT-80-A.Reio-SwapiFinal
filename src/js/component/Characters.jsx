import React from "react";
import { Context } from "../store/appContext.js";
import { useContext } from "react";
import { CharacterCard } from "./CharacterCard.jsx";
import "../../styles/CharacterCatalog.css";

import { element } from "prop-types";

export const Characters = () => {
    const { store, setStore } = useContext(Context);

    return (
        <div className="character-text-center mt-5">
            <div className="character-row">
                {
                    store.people?.map(el => (
                        <CharacterCard
                            key={el.uid}
                            img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
                            name={el.name}
                            uid={el.uid} />
                    ))
                }
            </div>
        </div>
    );
};
