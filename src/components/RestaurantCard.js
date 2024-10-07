import { CDN_URL } from "../utils/constants";

const styleCard={
  backgroundColor:"#f0f0f0"
  }

const RestaurantCard=(props)=>{
    // const{resname,cuisine}=props;
    const {resData}=props;
    const{cloudinaryImageId,name,cuisines,costForTwo,deliveryTime,avgRating}=resData;
   //  console.log(props);
     return(
     <div className="res-card" style={styleCard}>
           <img className="res-logo" alt="Loading" src={CDN_URL+cloudinaryImageId}/>
 
         <h3>{name}</h3>
         <h4>{cuisines.join(",")}</h4>  
         <h4>Rs{costForTwo/100} for two</h4>
         <h4>{avgRating}</h4>

         <h4>Delivery Time {deliveryTime}</h4>
     </div>);
 };

 export default RestaurantCard