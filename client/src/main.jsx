import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

import Home from './pages/HomePage'
import Breakfast from './pages/BreakfastPage'
import Lunch from './pages/LunchPage'
import Dinner from './pages/DinnerPage'
import Cart from './pages/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/breakfast',
        element: <Breakfast />
      },
      {
        path: '/lunch',
        element: <Lunch />
      },
      {
        path: '/dinner',
        element: <Dinner />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
