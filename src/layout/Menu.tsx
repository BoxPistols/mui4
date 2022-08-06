import React from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import HomePage from '../components/pages/HomePage'
import ProductPage from '../components/pages/ProductPage'

export const Menu: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        {/* <div className='flex f-row f-jc-center'> */}
        {/* <Link to='/'>Home</Link> | <Link to='/products'>products</Link> */}
        {/* </div> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='products' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
