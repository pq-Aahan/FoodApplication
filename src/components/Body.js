import RestaurantCard from "./RestaurantCard";
import resList from  "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{

    const [listOfRestaurants,setlistOfRestaurants]=useState([]);
    const[filteredRestaurants,setfilteredRestaurants]=useState([]);
    const[searchText,setsearchText]=useState([]);
    useEffect(()=>{fetchData();},[])

    const fetchData=async()=>{
       //const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4617168&lng=77.0643614&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"); 
       const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6522394&lng=76.8116091&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
    
    const json=await data.json();
    console.log(json);
    //console.log(json?.data?.cards[3].card.card.info);
   setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      };

    let listOfRestaurants2=[
        {
        type: "F",
        id: "74453",
        name: "Domino's Pizza",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        slaString: "45 MINS",
        averageRating:"4.5",
       
      },
      {
        type: "F",
        id: "74456",
        name: "KFC",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",        
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 36000,
        costForTwoString: "₹650 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        slaString: "45 MINS",
        averageRating:"3.0", 
      }, {
        type: "F",
        id: "74456",
        name: "Chaioos",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",        
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 45000,
        costForTwoString: "₹450 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        slaString: "25 MINS",
        averageRating:"4.2", 
      },];

    return listOfRestaurants.length===0?<Shimmer/>:(
        <div className="body">
            <div className="filter">
              <div  className="search">
                <input type="text" className="search-box" value={searchText} onChange={(event)=>{setsearchText(event.target.value) }}></input>
                <button onClick={()=>{ const filteredRes=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())); setfilteredRestaurants(filteredRes);}}>Search</button>
              </div>
                <button className="filter-btn" onClick={()=>{const filteredlist=listOfRestaurants.filter((res)=>res.info.avgRating>4);
                    setlistOfRestaurants(filteredlist); }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {filteredRestaurants.map((restaurant)=>(
              <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant.info}/></Link>))}
            </div>
        </div>
    );
}; 

export default Body