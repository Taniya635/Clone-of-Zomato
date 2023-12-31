// ## Namaste React Course by Akshay Saini
// Chapter 09 - Optimizing our App

import React from "react";

import Header from "./Components/Header";
import Body from "./Components/Body";
// import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/ProfileClass";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import Footer from "./Components/Footer";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Outlet(it contain children component like body, About, Restaurant Menu etc) and Footer Component
export const AppLayout = () => {
  return (
    
    <React.Fragment>
      {/* <ChakraProvider> */}
      <Header />
      <Outlet />
      <Footer />
      {/* </ChakraProvider> */}
      </React.Fragment>
  );
    
    
};

// call createBrowserRouter for routing different pages
