import React from "react";

function Item(props) {
    return (
        <div className="bg-indigo-800 p-1">
            <img
                src={`https://universalis-ffxiv.github.io/universalis-assets/icon2x/${props.id}.png`}
                alt={props.name}
                className="w-8 h-8 inline-block"
            />
            <h3>{props.name}</h3>
        </div>
    );
}
