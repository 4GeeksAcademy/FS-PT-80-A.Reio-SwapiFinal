import React from "react";
import { Context } from "../store/appContext.js";
import { useContext } from "react";
import { ShipCard } from "./ShipCard.jsx";
import { element } from "prop-types";
import "../../styles/ShipCatalog.css"


export const Ships = () => {
    const { store, setStore } = useContext(Context);

    return (
        <div className="ship-text-center ship-mt-5">
            <div className="ship-row">
                {
                    store.ships?.map(el => <ShipCard
                        key={el.uid}
                        img={`https://starwars-visualguide.com/assets/img/starships?${el.uid}.jpg`}
                        name={el.name}
                        uid={el.uid} />)
                }
            </div>
        </div>
    )
}
