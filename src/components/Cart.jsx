import React, { useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to a server or store it in the state.
    console.log(formData);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.item.name}>
                <p>{product.quantity}</p>
                {product.item.name} -{' '}
                {product.item.price ? `$${product.item.price}` : 'Precio no disponible'}{' '}
                <button onClick={() => removeFromCart(product.item.name)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button onClick={() => clearCart()}>Limpiar Carrito</button>
          <h3>Ingresa tus datos:</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Apellido:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Teléfono:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address">Dirección:</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Confirmar compra</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;