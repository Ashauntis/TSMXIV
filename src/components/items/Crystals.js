import React from "react";

function Crystals(props) {
    const image_url = `https://universalis-ffxiv.github.io/universalis-assets/icon2x/${props.id}.png`;

    return (
        <div>
            <img
                src={image_url}
                alt={props.name}
                className="w-8 h-8 inline-block"
            />
            {props.name} x{props.qty}
        </div>
    );
}

export default Crystals;
