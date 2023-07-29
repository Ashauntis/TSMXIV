import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useAPI from "../../hooks/useAPI";

function ItemCard(props) {
    const items = useSelector((state) => state.data.items);
    const [loading, setLoading] = useState(true);
    var materials = [];
    var crystals = [];

    useAPI(props.server, props.id, setLoading);

    if (items.hasOwnProperty("name")) {
        // // iterate through the properties of materials and crystals
        for (const [key, value] of Object.entries(items.materials)) {
            // console.log(`${key}: ${value}`);
            materials.push(<li>{key}</li>);
        }
        for (const [key, value] of Object.entries(items.crystals)) {
            // console.log(`${key}: ${value}`);
            crystals.push(<li>{key}</li>);
        }
    }

    return (
        <div className="bg-indigo-900 p-1">
            {/* <p>{loading ? 'Loading...' : items && items[props.id] ? items[props.id].name : 'Item not found'}</p> */}
            {loading ? (
                <p>Loading...</p>
            ) : items.hasOwnProperty("name") ? (
                <div>
                    <h1 className="text-4xl">{items.name}</h1>
                    <h2>Materials</h2>
                    <div className="mx-8 px-8">
                        <ul className="list-disc">{materials}</ul>
                    </div>
                    <h2>Crystals</h2>
                    <div className="mx-8 px-8">
                        <ul className="list-disc">{crystals}</ul>
                    </div>
                </div>
            ) : (
                // show the crystals and materials needed
                // items.materials.map((material, index) => {
                // }

                <div>Item not found</div>
            )}
        </div>
    );
}

export default ItemCard;
