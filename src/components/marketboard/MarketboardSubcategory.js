import React from 'react';
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import useAPI from '../../hooks/useAPI';

function MarketboardSubcategory(props) {
    const items = useSelector(state => state.data.items['item_data']);
    const [loading, setLoading] = useState(true);
    
    useAPI('Gilgamesh', 'item_data', setLoading, 'ItemBrowser');
    let results = [];

    useEffect(() => {
        if (!loading && items['item_data']) {
            console.log(items['item_data']);
            items['item_data'].map(item => { // this is broken - fix it
                if (item.category === props.subcategory) {
                    results.push(item);
                }
            })
        }
    })
    
    const handleClick = () => {
        props.setBrowsing({
            active: true,
            items: results,
        })
    }

    return (
        <div className="bg-indigo-900 p-1">
            <button onClick={handleClick}>{props.subcategory}</button>
        </div>
    );
}

export default MarketboardSubcategory;