import React from 'react'; 
import { createBrowserRouter, Router } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/cartcontext';
import { router } from './router';
import CartIcon from './components/carticon';



const App = () => { 
  return (
    < RouterProvider router={router}/>
  );
};

 export default App;