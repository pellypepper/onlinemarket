import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Sell from './sell';
import Market from './market';
import Pricing from './pricing';
import Partner from './partner';
import Login from './login';
import Signup from './signup';



import Home from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/sell',
    element: <Sell />
  },
  {
    path: '/market',
    element: <Market />
  },
  {
    path: '/pricing',
    element: <Pricing />
  },
  {
    path: '/partner',
    element: <Partner />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <RouterProvider router={router} />

  </React.StrictMode>
);


