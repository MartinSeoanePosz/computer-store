import React, { useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import {
  Container,
  Box,
  Heading,
  Stack,
  Text,
  Button,
  List,
  ListItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import Form from './Form';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

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
          <Form />
        </Stack>
      )}
    </Container>
  );
};

export default Cart;