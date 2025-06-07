import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Container'
import Product from './Product'
// import Product from './Product'

function App() {

  // const productName = "Buzdolabı";
  return (
    <div>
      {/* <Product productName="Ayakkab" price={320} />
      <hr />
      <Product productName="Pantolon" price={150} />
      <hr />
      <Product productName={productName} price={15000} /> */}
      <Container>
        <Product productName="Telefon" price={38000} />
      </Container>
    </div>
  )
}

export default App
