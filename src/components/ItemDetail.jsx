import React from 'react';
import { Center, Card, CardHeader, CardBody, CardFooter, Heading, Text } from "@chakra-ui/react";
import ItemCount from './ItemCount';
import { doc } from 'firebase/firestore';



function ItemDetail({ product }) {
    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className="item-detail">
            <Center p='1rem' >
                <Card>
                    <CardHeader>
                        <Heading size="md" fontSize={32} textAlign={'center'} fontWeight="bold">{product.name}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text fontSize={20} textAlign={'center'} fontWeight="bold">Descripcion</Text>
                        <Text> {product.description}</Text>
                        <Text fontSize={20} textAlign={'center'} fontWeight="bold">Categoria</Text>
                        <Text> {product.category}</Text>
                        <Text fontSize={20} textAlign={'center'} fontWeight="bold">Precio</Text>
                        <Text> {product.price}</Text>
                    </CardBody>
                    <CardFooter>
                        <ItemCount item={product}/>
                    </CardFooter>
                </Card>
            </Center>
        </div>
    );
}

export default ItemDetail;
