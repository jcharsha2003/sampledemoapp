import React from 'react';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import RootLayout from './components/eight/RootLayout';
import Home from './components/eight/Home';
import Login from './components/eight/Login';
import Register from './components/eight/Register';
import Technologies from './components/eight/Technologies';
import Angular from "./components/eight/Angular";
import Reactjs from './components/eight/Reactjs';
import Vue from "./components/eight/Vue"
import ErrorPage from './components/eight/ErrorPage';
function App() {
  const routerObj=createBrowserRouter([
   { path:"/",
     element:<RootLayout/>,
     errorElement:<ErrorPage/>,
     children:[{
      path:"/",
      element:<Home/>
     },
     {
      path:"/register",
      element:<Register/>
     },
     {
      path:"/login",
      element:<Login/>
     },
     {
      path:"/technologies",
      element:<Technologies/>,
      children:[{
        path:"angular",
        element:<Angular/>
       },
       {
        path:"reactjs",
        element:<Reactjs/>
       },
       {
        path:"vue",
        element:<Vue/>
       }
  
      ]
     }

    ]
     
  }
  ])
  return (
    <div className="App">
      <RouterProvider router={routerObj}/>
    </div>
  );
}

export default App;
