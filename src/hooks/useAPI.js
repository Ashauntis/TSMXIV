import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_items } from "../data/dataSlice.js";

var started_ids = [];
var checked_ids = [];

function useAPI(server, id, setLoading, source) {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.data.items);

    const fetcher = async (server, id, setLoading) => {

        // if we have already started a fetch for this id don't do it again...
        if (started_ids.includes(id)) {
            console.log(`Waiting for prior fetch of id: ${id}`);
            while (true) {
                if (checked_ids.includes(id)) {
                    console.log(`Finished waiting for prior fetch of id: ${id}`);
                    setLoading(false);
                    return;
                }
                // console.log(`Waiting for ${id} to finish...`)
                await new Promise((r) => setTimeout(r, 100));
            }

        } else {
            started_ids.push(id);

            console.log(
                `Connecting to express backend from ${source} with id: ${id} and server: ${server}`
            );
        
            dispatch(
                set_items({
                    [id]: { time: Date.now() },
                })
            );

            const url = `http://localhost:3001/api/recipes/?id=${id}`;
            const response = await fetch(url);
            const jsonData = await response.json();
            jsonData.time = Date.now();

            // set the data in the store with a key of id
            dispatch(set_items({ [id]: jsonData }));
            setLoading(false);

            checked_ids.push(id);

        }
    };

    useEffect(() => {
        fetcher(server, id, setLoading);
    }, []);

    // You can return any relevant state from the hook
    return;
}

export default useAPI;

// TODO FIX EXPRESS RESPONSE CODES (304?) AND UPDATE THIS FUNCTION TO CHECK THE
// RESPONSE CODE WAS WHAT WE EXPECTED
