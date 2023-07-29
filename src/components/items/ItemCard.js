import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useAPI from "../../hooks/useAPI";

import Crystals from "./Crystals.js";
import Ingredient from "./Ingredient";

function ItemCard(props) {
    const items = useSelector((state) => state.data.items[props.id]);
    const [loading, setLoading] = useState(true);
    const [materials, setMaterials] = useState([]);
    const [crystals, setCrystals] = useState([]);

    useAPI(props.server, props.id, setLoading, "ItemCard");

    useEffect(() => {
        if (!loading && items) {
            const new_mats = [];
            const new_crystals = [];

            for (const property in items) {
                if (property === "materials") {
                    for (const mat in items[property]) {
                        const new_mat = {
                            name: mat,
                            id: items[property][mat].id,
                            qty: items[property][mat].qty,
                        };
                        new_mats.push(new_mat);
                    }
                }

                if (property === "crystals") {
                    for (const crystal in items[property]) {
                        const new_cry = {
                            name: crystal,
                            id: items[property][crystal].id,
                            qty: items[property][crystal].qty,
                        };
                        new_crystals.push(new_cry);
                    }
                }
            }
            setMaterials(new_mats);
            setCrystals(new_crystals);
        }
    }, [loading, items]);

    return (
        <div className="bg-indigo-900 p-1">
            {loading ? (
                <p>Loading...</p>
            ) : items.hasOwnProperty("name") ? (
                <div>
                    
                    <h1 className="text-4xl"><img
                        src={`https://universalis-ffxiv.github.io/universalis-assets/icon2x/${props.id}.png`}
                        alt={props.name}
                        className="w-16 h-16 inline-block"
                    /> {items.name}</h1>
                    {materials.length > 0 && <h2>Materials</h2>}
                    <div className="mx-8 px-4">
                        {materials.map((mat) => {
                            return (
                                <Ingredient
                                    server={props.server}
                                    id={mat.id}
                                    name={mat.name}
                                    key={mat.id + Date.now().time}
                                    qty={mat.qty}
                                />
                            );
                        })}
                    </div>
                    {crystals.length > 0 && <h2>Crystals</h2>}
                    <div className="mx-8 px-8">
                        {crystals.map((cry) => {
                            return (
                                <Crystals
                                    name={cry.name}
                                    key={cry.id + Date.now().time}
                                    id={cry.id}
                                    qty={cry.qty}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div>Item not found</div>
            )}
        </div>
    );
}

export default ItemCard;
