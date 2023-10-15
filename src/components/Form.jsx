import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

const Form = () => {
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
    // Confirmacion de transaccion
    const isConfirmed = window.confirm('Are you sure you want to submit this transaction?');

    if (isConfirmed) {
      // Confirmado
      console.log('Transaction confirmed:', formData);
    } else {
      // Transaccion cancelada
      console.log('Transaction canceled');
    }
  };

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
    </Box>
  );
};

export default Form;
