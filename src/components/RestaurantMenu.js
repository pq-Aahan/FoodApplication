import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';

const RestaurantMenu=()=> {
    const[resInfo,setResinfo]=useState([]);
    useEffect (()=>{fetchMenu();},[]);

    const fetchMenu= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4617168&lng=77.0643614&restaurantId=606500&catalog_qa=undefined&submitAction=ENTER");     
        
        const json=await data.json();
        console.log("hi",json);
        setResinfo(json.data);
    };

//const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;


return !resInfo ? (
    <Shimmer />
) : (
    <div className="menu">
        {resInfo?.cards?.length > 2 && (
            <h1>{resInfo.cards[2]?.card?.card?.info?.name}</h1>
        )}
        {resInfo?.cards?.length > 2 && (
            <>
             <h3>{resInfo.cards[2].card.card.info.name}</h3>
                <p>{resInfo.cards[2].card.card.info.cuisines.join(",")}</p>
                <p>{resInfo.cards[2].card.card.info.costForTwoMessage}</p>
            </>
        )}
    </div>
);
};

export default RestaurantMenu;