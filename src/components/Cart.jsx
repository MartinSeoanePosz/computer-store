import React, { useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import {
  Container,
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Stack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';

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

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Container maxW="xl">
      <Heading as="h2" size="lg" my="4">
        Carrito
      </Heading>
      {cart.length === 0 ? (
        <Text>Tu carrito está vacío</Text>
      ) : (
        <Stack direction={['column', 'row']} spacing={4}>
          <Box flex={1}>
            <List spacing={3}>
              {cart.map((product) => (
                <Card  key={product.item.name} className="mb-3">
                  <CardHeader>
                    <Heading size="md" fontSize={20} textAlign={'center'} fontWeight="bold">{product.item.name}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text fontSize={20} textAlign={'center'} fontWeight="bold">Cantidad</Text>
                    <Center>
                      <Text>{product.quantity}</Text>
                    </Center>
                    <Text fontSize={20} textAlign={'center'} fontWeight="bold">Precio</Text>
                    <Center>
                      <Text>{product.item.price ? `$${product.item.price}` : 'Precio no disponible'}{' '}</Text>
                    </Center>
                  </CardBody>
                  <CardFooter>
                    <Button colorScheme="red" size="sm" leftIcon={<DeleteIcon />} onClick={() => removeFromCart(product.item.name)}>
                      Eliminar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </List>
            <Button colorScheme="orange" mt="4" onClick={() => clearCart()}>
              Limpiar Carrito
            </Button>
          </Box>
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
        </Stack>
      )}
    </Container>
  );
};
export default Cart;