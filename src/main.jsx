import React from "react"
import ReactDOM from "react-dom/client"

import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css"

const router = createHashRouter([
  { 
    path: "/",
   element: <Home /> 
  },
  { 
    path: "/about",
   element: <About /> 
  },
  { 
    path: "/pricing",
   element: <Pricing /> 
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)