import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Components/Error";
import Body from "./Components/Body";
import About from "./Components/About";
import Profile from "./Components/ProfileClass";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Login from "./Components/Login";
import ReactDOM from "react-dom/client";
import { AppLayout } from "./App";
import './index.css'
import Header from "./Components/Header";
import CartPage from "./Components/CartPage";
import DebitPay from "./Components/DebitPay";
import Register from "./Components/Register";
import ProfileClass from "./Components/ProfileClass";
// import { useState } from "react";

// const [cart, setCart] = useState([]);

//   // Function to add an item to the cart
//   const addToCart = (item) => {
//     setCart(prevCart => [...prevCart, item]);
//   };


const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <AppLayout />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [
        // show children component for routing
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "about",
          element: <About />,
          children: [{ // nested routing
            path: "profile",
            element: <ProfileClass />,
          }]
        },
        {
          path:"header",
          element:<Header />
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "restaurant/:resId",
          element: <RestaurantMenu   />,
        },
        {
          path:"cart",
          element:<CartPage/>,
        },
        {
          path:"debit",
          element:<DebitPay/>
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path:'register',
          element:<Register/>,
        }
        
      ],
    },
   
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter