import React from 'react';

function MarketboardSubcategory(props) {
    return (
        <div className="bg-indigo-900 p-1">
            <a href={`/cat/${props.id}`}>{props.subcategory}</a>
        </div>
    );
}

export default MarketboardSubcategory;