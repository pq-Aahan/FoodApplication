import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const[buttonName,setbuttonName]=useState("Login");

    const onlineStatus=useOnlineStatus();

    const {loggedinUser}=useContext(UserContext);

    const cartItems=useSelector((store)=>store.cart.items);


    return(
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 mb-2">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center ">
               <ul className="flex p-4 m-4">
                <li className="px-4">Online Status:{onlineStatus?" 🟢":" 🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
    
                <li className="login px-4  font-bold text-xl"><Link to="/cart">Cart-{cartItems.length}</Link></li>
                <button className="login px-4" onClick={()=>{buttonName==="Login"? setbuttonName("Logout"): setbuttonName("Login");}}>{buttonName}</button>
               </ul>
            </div>

        </div>
    );
};

export default Header