import React, { useState, useContext, useEffect } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { CartContext } from '../context/CartContext'

const Form = () => {
    const cart = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
    });
  const [ orderId, setOrderId ] = useState(null);
  const db = getFirestore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newOrder = {
            buyer: formData,
            items: cart.cart,
        };
        addDoc(order, newOrder).then(({ id }) => setOrderId(id));
    }

    const order = collection(db, 'orders');

  return (
    <Box flex={1}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Nombre:</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl mt={3}>
          <FormLabel>Apellido:</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl mt={3}>
          <FormLabel>Teléfono:</FormLabel>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl mt={3}>
          <FormLabel>Correo Electrónico:</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl mt={3}>
          <FormLabel>Dirección:</FormLabel>
          <Input
            as="textarea"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <Button colorScheme="teal" type="submit" mt={3}>
          Enviar Datos
        </Button>
      </form>
      <h3>Id de la compra: {orderId}</h3>
    </Box>
  );
};

export default Form;
