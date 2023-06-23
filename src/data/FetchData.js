import { useDispatch } from 'react-redux'; 
import { increment } from './dataSlice.js';

function FetchData() {
    // create a dispatch variable to dispatch actions to the store
    const dispatch = useDispatch();

    const fetcher = async () => {
    try {
      const response = await fetch('https://universalis.app/api/v2/Gilgamesh/39872');
      const jsonData = await response.json();
      console.log(jsonData);
      dispatch(increment());
    } catch (error) {
      console.error('Error fetching data:', error);
      return;
    }
  };

    return(
        <button onClick={fetcher}>Increment</button>
    )
}

export default FetchData; 