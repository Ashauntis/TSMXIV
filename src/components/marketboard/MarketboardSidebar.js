import React from "react";
import { useState } from "react";
import MarketboardCategory from "./MarketboardCategory";

function MarketboardSidebar() {
    const [browsing, setBrowsing] = useState({
        active: false,
        category: "",
    });

    const cats = {
        Weapons: [
            "Gladiator's Arm's",
            "Maurauder's Arms",
            "Dark Knight's Arms",
            "Gunbreaker's Arms",
            "Lancer's Arms",
            "Reaper's Arms",
            "Pugilist's Arms",
            "Samurai's Arms",
            "Rogue's Arms",
            "Archer's Arms",
            "Machinist's Arms",
            "Dancer's Arms",
            "Thaumaturge's Arms",
            "Arcanists's Arms",
            "Red Mage's Arms",
            "Conjurer's Arms",
            "Scholar's Arms",
            "Astrologian's Arms",
            "Sage's Arms",
            "Carpenter's Tools",
            "Blacksmith's Tools",
            "Armorer's Tools",
            "Goldsmith's Tools",
            "Leatherworker's Tools",
            "Weaver's Tools",
            "Alchemist's Tools",
            "Culinarian's Tools",
            "Miner's Tools",
            "Botanist's Tools",
            "Fisher's Tools",
            "Fishing Tackle",
        ],
        Armor: [
            "Shields",
            "Head",
            "Body",
            "Hands",
            "Legs",
            "Feet",
            "Earrings",
            "Necklaces",
            "Bracelets",
            "Rings",
        ],
        Items: [
            "Medicine",
            "Ingredients",
            "Meals",
            "Seafood",
            "Stone",
            "Metal",
            "Lumber",
            "Leather",
            "Cloth",
            "Bone",
            "Reagents",
            "Dyes",
            "Miscellany",
            "Crystals",
            "Orchestrion Rolls",
        ],
        Housing: [
            "Exterior Fixtures",
            "Interior Fixtures",
            "Outdoor Furnishings",
            "Furnishings",
            "Chairs and Beds",
            "Tables",
            "Tabletop",
            "Wall-mounted",
            "Rugs",
            "Gardening Items",
            "Paintings",
        ],
    };

    return (
        <div>
            <div className="float-left w-[20%] mx-5 h-full overflow-y-scroll">
                {
                    /* iterate over each category to render a MarketboardCategory component */
                    Object.keys(cats).map((cat) => {
                        return (
                            <MarketboardCategory
                                key={cat}
                                category={cat}
                                subcategories={cats[cat]}
                                setBrowsing={setBrowsing}
                            />
                        );
                    })
                }
            </div>

        </div>
    );
}

export default MarketboardSidebar;
