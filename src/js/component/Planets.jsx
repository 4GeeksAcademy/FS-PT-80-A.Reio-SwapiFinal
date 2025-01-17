import React from "react";
import { Context } from "../store/appContext.js";
import { useContext } from "react";
import { PlanetCard } from "./PlanetCard.jsx";
import { element } from "prop-types";
import "../../styles/PlanetCatalog.css"

export const Planets = () => {
    const { store, setStore } = useContext(Context);

    return (
        <div className="planet-text-center planet-mt-5">
            <div className="planet-row">
                {
                    store.planets?.map(el => <PlanetCard
                        key={el.uid}
                        img={`https://starwars-visualguide.com/assets/img/planets?${el.uid}.jpg`}
                        name={el.name}
                        uid={el.uid} />)
                }
            </div>
        </div>
    )
}
