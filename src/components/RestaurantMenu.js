import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu=()=> {
   // const[resInfo,setResinfo]=useState([]);
    const{resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
   // useEffect (()=>{fetchMenu();},[]);

    /* const fetchMenu= async()=>{
        const data=await fetch(MENU_API+resId);     
        
        const json=await data.json();
        console.log("hi",json);
        setResinfo(json.data);
    }; */

//const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info; data.cards[4]..groupedcards.cardsgroupmap.regular.czrds[1]..card[0].ard.item.card.name

const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || [];
const hasCarousel = itemCards?.carousel && itemCards.carousel.length > 0;
const categories=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")||{};
console.log("cat",categories);
if (!itemCards) {
  console.log("itemCards is undefined or null");
} else {
  console.log("test", itemCards);
}


return !resInfo ? (
    <Shimmer />
) : (
    <div className="text-center">
            {resInfo?.cards?.length > 2 && (
                <>
                    <h1 className="font-bold my-6 text-2xl">{name}</h1>
                    <p className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}</p>
                    {/* <ul>
                        {hasCarousel ? (
                            itemCards.carousel.map((item, index) => (
                                <li key={index}>
                                    {item?.dish?.info?.name} - {" Rs."}{item?.dish?.info?.price / 100}
                                </li>
                            ))
                        ) : (
                            <li>No menu items available.</li> 
                        )}
                    </ul> */}
                    {categories.map((category)=><RestaurantCategory data={category?.card.card}/>)}
                </>
                    )}
        </div> 
);
};

export default RestaurantMenu;