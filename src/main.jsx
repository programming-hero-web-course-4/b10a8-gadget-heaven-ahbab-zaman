import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';
import Reviews from './Components/Reviews/Reviews';
import GadgetsCards from './Components/GadgetsCards/GadgetsCards';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('../categories.json'),
        children:[
          {
            path:"/",
            element:<GadgetsCards></GadgetsCards>,
            loader: ()=> fetch(`../gadgets.json`)
          },{
            path:"/gadgetsCards/:category",
            element:<GadgetsCards></GadgetsCards>,
            loader: ()=> fetch(`../gadgets.json`)
          }
        ]
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path:"/reviews",
        element:<Reviews></Reviews>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
