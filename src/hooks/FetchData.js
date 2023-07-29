import { useDispatch } from 'react-redux'; 
import { useEffect } from 'react';

function FetchData() {
    // create a dispatch variable to dispatch actions to the store
    const dispatch = useDispatch();

    useEffect((dispatch) => {
     const url = 'http://localhost:3001/api/recipes?id=39872'

     const fetchData = async () => {
      let response = await fetch(url);
      response.json().then(json => {
          // dispatch({type: 'SET_DATA', payload: json})
          console.log(json);
      })
    };
    fetchData();
  }, []);
}

export default FetchData; 