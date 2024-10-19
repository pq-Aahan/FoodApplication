import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const[buttonName,setbuttonName]=useState("Login");

    const onlineStatus=useOnlineStatus();

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
    
                <li className="login px-4"><Link>Cart</Link></li>
                <button className="login px-4" onClick={()=>{buttonName==="Login"? setbuttonName("Logout"): setbuttonName("Login");}}>{buttonName}</button>
               </ul>
            </div>

        </div>
    );
};

export default Header