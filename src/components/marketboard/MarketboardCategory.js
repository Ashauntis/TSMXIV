import React from 'react';
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';

import MarketboardSubcategory from './MarketboardSubcategory';

function MarketboardCategory(props) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

    return (
        <div className="bg-indigo-800 p-2">
            <button onClick={toggleExpand}>{props.category}</button>
            { expanded && (
                props.subcategories.map((subcategory, index) => {
                    return <MarketboardSubcategory key={index} subcategory={subcategory} setBrowsing={props.setBrowsing} />
                })
            )}
        </div>
    );
}

export default MarketboardCategory;