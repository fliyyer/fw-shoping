import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '*',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <Login />,
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
