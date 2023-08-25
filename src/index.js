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
            // element: <Profile />,
          }]
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "restaurant/:resId",
          element: <RestaurantMenu />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter