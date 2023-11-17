import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

import Home from './pages/HomePage'
import Meals from './pages/MealsPage.jsx'
import Cart from './pages/Cart'
import OrderHistory from './pages/OrderHistory'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/meal/:name",
        element: <Meals />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: '/orderhistory',
        element: < OrderHistory/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
