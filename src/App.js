import React from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import RootLayout from "./components/eight/RootLayout";
import Home from "./components/eight/Home";
import Login from "./components/eight/Login";
import Register from "./components/eight/Register";
import Aboutus from "./components/eight/Aboutus";
import ErrorPage from "./components/eight/ErrorPage";
import UserProfile from "./components/eight/user-profile/UserProfile";
import Cart from "./components/eight/cart/Cart";
import Produts from "./components/eight/products/Produts";
function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/aboutus",
          element: <Aboutus />,
         
        },
        {
          path: "/user-profile",
          element: <UserProfile />,
          children: [
            {
              path: "products",
              element: <Produts />,
             
            },
            {
              path: "cart",
              element: <Cart />,
             
            }
          ]
         
        }

      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={routerObj} />
    </div>
  );
}

export default App;