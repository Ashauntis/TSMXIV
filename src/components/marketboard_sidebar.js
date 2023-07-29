import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MarketboardCategory from "./marketboard_category";
import MarketboardSubcategory from "./marketboard_subcategory";
import useAPI from "../hooks/useAPI.js";
import SearchBar from "./search_bar";
import { useEffect } from "react";

function MarketboardSidebar() {
  const dispatch = useDispatch();
  // const fetchData = FetchData();

  const categories = [
    {
      id: 1,
      name: "Weapons",
      subcategories: [{
        id: 1,
        name: "Gladiator's Arm's", 
      },
      {
        id: 2,
        name: "Maurauder's Arms",
      }, 
      {
        id: 3,
        name: "Dark Knight's Arms", 
      },
      {
        id: 4,
        name: "Gunbreaker's Arms", 
      },
      {
        id: 5,
        name: "Lancer's Arms",
      },
      {
        id: 6,
        name: "Reaper's Arms", 
      },
      {
        id: 7,
        name: "Pugilist's Arms",
      },
      {
        id: 8,
        name: "Samurai's Arms",
      },
      {
        id: 9,
        name: "Rogue's Arms",
      },
      {
        id: 10,
        name: "Archer's Arms",
      },
      {
        id: 11,
        name: "Machinist's Arms",
      },
      {
        id: 12,
        name: "Dancer's Arms",
      },
      {
        id: 13,
        name: "Thaumaturge's Arms",
      },
      {
        id: 14,
        name: "Arcanists's Arms",
      },
      {
        id: 15,
        name: "Red Mage's Arms",
      },
      {
        id: 16,
        name: "Conjurer's Arms",
      },
      {
        id: 17,
        name: "Scholar's Arms",
      },
      {
        id: 18,
        name: "Astrologian's Arms",
      },
      {
        id: 19,
        name: "Sage's Arms",
      },
      {
        id: 20,
        name: "Carpenter's Tools",
      },
      {
        id: 21,
        name: "Blacksmith's Tools",
      },
      {
        id: 22,
        name: "Armorer's Tools",
      },
      {
        id: 23,
        name: "Goldsmith's Tools",
      },
      {
        id: 24,
        name: "Leatherworker's Tools",
      },
      {
        id: 25,
        name: "Weaver's Tools",
      },
      {
        id: 26,
        name: "Alchemist's Tools",
      },
      {
        id: 27,
        name: "Culinarian's Tools",
      },
      {
        id: 28,
        name: "Miner's Tools",
      },
      {
        id: 29,
        name: "Botanist's Tools",
      },
      {
        id: 30,
        name: "Fisher's Tools",
      },
      {
        id: 31,
        name: "Fishing Tackle",
      }]
    },
    {
      id: 2,
      name: "Armor",
      subcategories: [],
    },
    {
      id: 3,
      name: "Items",
      subcategories: [],
    },
    {
      id: 4,
      name: "Housing",
      subcategories: [],
    },
  ];

  return (
    <div className="float-left w-[10%] mx-5 h-full overflow-y-scroll">
      {categories.map((category) => (
        <div key={category.id}>
          <MarketboardCategory category={category.name} />
          {category.subcategories && category.subcategories.map((subcategory) => (
            <MarketboardSubcategory
            key={subcategory.id}
            subcategory={subcategory.name}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default MarketboardSidebar;
