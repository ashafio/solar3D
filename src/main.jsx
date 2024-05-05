import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyEarth from '../src/MyEarth.jsx'
import MyMoon from '../src/MyMoon.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/earth",
    element: <MyEarth></MyEarth>,
  },
  {
    path: "/moon",
    element: <MyMoon></MyMoon>,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
