import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import useAPI from "../../hooks/useAPI";

function MaterialItem(props) {
    return (
        <div>
            <img
                src={`https://universalis-ffxiv.github.io/universalis-assets/icon2x/${props.id}.png`}
                alt={props.name}
                className="w-8 h-8 inline-block"
            />
            {props.qty}x {props.name}
        </div>
    )
}

export default MaterialItem;
