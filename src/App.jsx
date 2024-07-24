import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main';
import ProductsDetails from './components/main/subSection/productsDetails';
import CardCheackout from './components/main/subSection/cardCheackout';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/:products/:id" element={ <ProductsDetails /> } />
        <Route path="/card" element={ <CardCheackout /> } />
        <Route path="/account" element={ 'account' } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App