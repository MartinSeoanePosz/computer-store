import { BrowserRouter , Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import React from 'react';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

const App = () => {


  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            {/* Ruta principal */}
            <Route
              exact path="/"
              element={<ItemListContainer />
              }
            />

            {/* Ruta de categoría */}
            <Route
              path="/category/:id"
              element={
                <ItemListContainer
                />
              }
            />
            {/* Ruta de detalles del producto */}
            <Route
              path="/item/:id"
              element={
                <ItemDetailContainer />
              }
            />
              <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
