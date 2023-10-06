import { BrowserRouter , Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import React from 'react';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

const App = () => {
  // const [products] = React.useState([]); 
  // const products = [
  //   { id: 1, name: "Product 1", description: "Product 1 description", stock: 5, category: "monitores" },
  //   { id: 2, name: "Product 2", description: "Product 2 description", stock: 10, category: "monitores" },
  //   { id: 3, name: "Product 3", description: "Product 3 description", stock: 30, category: "gabinetes" },
  //   { id: 4, name: "Product 4", description: "Product 4 description", stock: 10, category: "gabinetes" },
  //   { id: 5, name: "Product 5", description: "Product 5 description", stock: 25, category: "parlantes" },
  //   { id: 6, name: "Product 6", description: "Product 6 description", stock: 8, category: "parlantes" },
  // ];



  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            {/* Ruta principal */}
            <Route
              exact path="/"
              element={<ItemListContainer />}
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
