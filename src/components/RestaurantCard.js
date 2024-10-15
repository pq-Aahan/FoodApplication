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
     <div className="m-4 p-5 w-[250px] rounded-lg flex flex-col bg-gray-100 hover:bg-gray-300" >
           <img className="res-logo rounded-md" alt="Loading" src={CDN_URL+cloudinaryImageId}/>
 
         <h2 className="font-bold py-3 text-xl">{name}</h2>
         <h4>{cuisines.join(",")}</h4>  
         <h4>Rs{costForTwo/100} for two</h4>
         <h4>{avgRating}</h4>

         <h4>Delivery Time {deliveryTime}</h4>
        

     </div>);
 };

 export default RestaurantCard