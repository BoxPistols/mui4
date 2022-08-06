import React from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import HomePage from '../components/pages/HomePage'
import ProductPage from '../components/pages/ProductPage'

export const Menu: React.FC = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <div className='flex f-row f-jc-center'>
          <Link to='/'>Home</Link> | <Link to='/productPage'>productPage</Link>
        </div>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='productPage' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
