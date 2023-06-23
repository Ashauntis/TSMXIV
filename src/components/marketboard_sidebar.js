import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MarketboardCategory from './marketboard_category';
import FetchData from '../data/FetchData.js'
import SearchBar from './search_bar';
import { useEffect } from 'react';

function MarketboardSidebar(){
    useEffect(() => {
      // this block only executes when the component loads for the first time, and when any data in the second argument changes.
    })
    const array = ['test 1', 'test 2', 'test 3'];
    const data = useSelector((state) => state.data);

  return (
    <div className="sidebar">
        <SearchBar />
        <FetchData />
        <span>{data.value}</span>
    </div>
  );
}

export default MarketboardSidebar;
