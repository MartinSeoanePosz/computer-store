import React, { useState, useContext } from "react";
import { Button, Flex, Text, Box, Spacer } from "@chakra-ui/react";
import { CartContext } from '../context/CartContext'; 

const ItemCount = ({ item }) => {
    const [count, setCount] = useState(0);
    const { cart, addToCart } = useContext(CartContext); // Trae el addToCart del CartContext

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };

    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            bg="gray.100"
            p={4}
            borderRadius="md"
            boxShadow="sm"
        >
            <Button
                colorScheme="red"
                mr={4}
                onClick={() => {
                    decrement();
                }}
            >
                -
            </Button>
            <Box
                borderWidth="1px"
                borderRadius="md"
                p={2}
                fontWeight="bold"
            >
                <Text fontSize="xl">{count}</Text>
            </Box>
            <Button
                colorScheme="teal"
                mr={4}
                onClick={() => {
                    increment();
                }}
            >
                +
            </Button>

            <button onClick={() => addToCart(item, count)}>Agregar al carrito</button>
        </Flex>
    );
}

export default ItemCount;