import React from "react";

function Crystals(props) {
    return (
        <div>
            <img
                src={`https://universalis-ffxiv.github.io/universalis-assets/icon2x/${props.id}.png`}
                alt={props.name}
                className="w-8 h-8 inline-block"
            />
            {props.name} x{props.qty}
        </div>
    );
}

export default Crystals;
