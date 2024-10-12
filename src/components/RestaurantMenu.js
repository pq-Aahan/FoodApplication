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
const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || [];

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
                    <p>{cuisines?.join(", ")}-{costForTwoMessage}</p>
                    <h2>MENU</h2>
                    <ul>
                        {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}-{"Rs."}{item.card.info.price/100|| item.card.info.defaultPrice/100}</li>)}
                        

                    </ul>
                </>
                    )}
        </div> 
);
};

export default RestaurantMenu;