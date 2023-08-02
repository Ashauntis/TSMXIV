import react from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Item from './Item.js';

import useAPI from '../../hooks/useAPI';

function ItemBrowser(props) {
    const items = useSelector(state => state.items);
    const [loading, setLoading] = useState(true);

    useAPI('Gilgamesh', 'item_data', setLoading, 'ItemBrowser');

    useEffect(() => {
        if (!loading && items) {
            console.log(items);
        }
    }); 

    return (
        <div className='absolute left-[10%]'>
            {loading ? <p>Loading...</p> : items.hasOwnProperty('name') ? 
            items.map(item => {
                return <Item name={item.name} id={item.id} />
            })            
            : <p>Something went wrong...</p>}
        </div>
    )
}

export default ItemBrowser;