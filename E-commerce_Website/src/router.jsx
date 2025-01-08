import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage.jsx';
import CheckoutPage from './components/checkoutpage.jsx';
import Receipt from './components/receipt';
import CartIcon from './components/carticon';
import ProductCard from './components/productcard';

export const router = createBrowserRouter([
  {
      path:"/",
      element: <LandingPage/>
  },
  {
      path:"/checkoutpage",
      element: <CheckoutPage/>
  },
  {
      path:"/receipt",
      element: <Receipt/>
  },
  {
      path:"/productCard",
      element:<ProductCard/>
  },
  {
      path:"/carticon",
      element:<CartIcon/>
  }
])


