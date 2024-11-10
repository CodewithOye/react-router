import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider } from 'react-router-dom'
import Product from './Pages/Product'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Terms from './Pages/Terms'
import Privacy from './Pages/Privacy'
import RootLayout from './Layout/RootLayout'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path='/' element={<RootLayout />} >
        <Route  />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />

      </Route>
    )

  )

  return (
    <RouterProvider router={router} />
  )
}

export default App