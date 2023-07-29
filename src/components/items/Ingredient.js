import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useAPI from "../../hooks/useAPI";

import MaterialItem from "./MaterialItem";

function Ingredient(props) {
    const items = useSelector((state) => state.data.items[props.id]);
    const [loading, setLoading] = useState(true);
    const [crafted, setCrafted] = useState(false);
    const [materials, setMaterials] = useState([]);
    const [crystals, setCrystals] = useState([]);

    useAPI(props.server, props.id, setLoading, "Ingredient");

    useEffect(() => {
        if (!loading && items) {
            const new_mats = [];
            const new_crystals = [];
            var is_crafted = false;

            for (const property in items) {
                if (property === "materials") {
                    for (const mat in items[property]) {
                        is_crafted = true;
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

            setCrafted(is_crafted);
            setMaterials(new_mats);
            setCrystals(new_crystals);
        }
    }, [loading, items]);

    return (
        <div className="bg-indigo-900 p-1">
            {loading ? (
                <p>Loading...</p>
            ) : items.hasOwnProperty("name") ? (
                crafted ? (
                    // iterate through materials and display them as 
                    // their own Ingredient component
                    <div>
                        <img
                            src={`https://universalis-ffxiv.github.io/universalis-assets/icon2x/${props.id}.png`}
                            alt={props.name}
                            className="w-8 h-8 inline-block"
                        />
                        {props.qty}x {props.name} uses: <br/>
                        {materials.map((mat) => (
                            <Ingredient
                                server={props.server}
                                id={mat.id}
                                name={mat.name}
                                qty={mat.qty * props.qty}
                                key={mat.id + Date.now().time}
                            />
                        ))}
                    </div>
                    
                ) : (
                    <MaterialItem
                        server={props.server}
                        id={props.id}
                        name={props.name}
                        qty={props.qty}
                    />
                )
            ) : (
                <div>Item not found</div>
            )}
        </div>
    );
}

export default Ingredient;
