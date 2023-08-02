import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_items } from "../data/dataSlice.js";

function useAPI(server, key, setLoading, source) {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.data.items);

    const fetcher = async (server, id, setLoading) => {
        const url = `http://localhost:3001/api/recipes/?id=${id}`;

        // first check to see if the item is already pending an update
        if (items[id] && items[id].pending) {
            console.log(`Waiting for prior fetch of id: ${id}`);
            while (true) {
                if (items[id] && !items[id].pending) {
                    // set loading to false so we can render the item
                    setLoading(false);
                }
            }
        } else {
            // set a pending marker on our item object even if it doesn't exist yet
            dispatch(set_items({ [id]: { pending: true } }));
            // and start the api call
            const response = await fetch(url);
            const jsonData = await response.json();
            jsonData.time = Date.now();
            // set the data in the store with a key of id, and remove the pending marker
            dispatch(set_items({ [id]: { ...jsonData, pending: false } }));
            // set loading to false so we can render the item
            setLoading(false);
        }
    };

    useEffect(() => {
        fetcher(server, key, setLoading);
    }, []);

    // You can return any relevant state from the hook
    return;
}

export default useAPI;