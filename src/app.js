import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import React, { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";

const Grocery=lazy(()=>import("./components/Grocery"));

const AppLayout=()=>{
    const [userinfo, setUserInfo] = useState();

    useEffect(() => {
        const data = {
          name: "Aahan",
        };
        setUserInfo(data.name); 
      }, []);
   
    
    return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userinfo}}>
    <div className="app">
     <Header/>
     {/* <Body/> */}
     <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>);

    
};

const appRouter=createBrowserRouter([{
    path:"/",
    element:<AppLayout/>,
    children:[
    {
        path:"/",
        element:<Body/>,
    },{
        path:"/about",
        element:<About/>,
    },{
        path:"/contact",
        element:<Contact/>,
    },{
        path:"/grocery",
        element:<Suspense fallBack={<h1>Loading....</h1>}><Grocery/></Suspense>,
    },{
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
    },
    {
        path:"/Cart",
        element:<Cart/>,
    },
],
    errorElement:<Error/>,
},{
    path:"/about",
    element:<About/>,
},{
    path:"/contact",
    element:<Contact/>,
},])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

