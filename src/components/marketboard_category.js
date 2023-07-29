import React from 'react';

function MarketboardCategory(props) {
    return (
        <div className="bg-indigo-800 p-2">
            <a href={`/cat/${props.id}`}>{props.category}</a>
        </div>
    );
}

export default MarketboardCategory;