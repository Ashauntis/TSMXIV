import './App.css';
import MarketboardSidebar from './components/marketboard_sidebar';
import Header from './components/header';
import ItemCard from './components/items/ItemCard';

function App() {

  return (
      <div className="App bg-indigo-950 h-screen text-indigo-50">
          <Header/>
          <div className="inline-block h-[90%] w-full">
            <MarketboardSidebar/>
            <div className="ml-[200px] w-4/5">
              {/* <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> */}
              <ItemCard server="Adamantoise" id="39872"/>
            </div>
          </div>
      </div>
  );
}

export default App;