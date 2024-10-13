import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu=()=> {
    const[resInfo,setResinfo]=useState([]);
    const{resId}=useParams();
    useEffect (()=>{fetchMenu();},[]);

    const fetchMenu= async()=>{
        const data=await fetch(MENU_API+resId);     
        
        const json=await data.json();
        console.log("hi",json);
        setResinfo(json.data);
    };

//const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info; data.cards[4]..groupedcards.cardsgroupmap.regular.czrds[1]..card[0].ard.item.card.name

const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || [];
const hasCarousel = itemCards?.carousel && itemCards.carousel.length > 0;

if (!itemCards) {
  console.log("itemCards is undefined or null");
} else {
  console.log("test", itemCards);
}


return !resInfo ? (
    <Shimmer />
) : (
    <div className="menu">
            {resInfo?.cards?.length > 2 && (
                <>
                    <h1>{name}</h1>
                    <h3>{name}</h3>
                    <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
                    <h2>MENU</h2>
                    <ul>
                        {/* Conditionally render if carousel exists and has items */}
                        {hasCarousel ? (
                            itemCards.carousel.map((item, index) => (
                                <li key={index}>
                                    {item?.dish?.info?.name} - {" Rs."}{item?.dish?.info?.price / 100}
                                </li>
                            ))
                        ) : (
                            <li>No menu items available.</li> // Fallback message if no items are available
                        )}
                    </ul>
                </>
                    )}
        </div> 
);
};

export default RestaurantMenu;