import React from 'react';
import { 
    Center, 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Heading, 
    Text,
Image } from "@chakra-ui/react";
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
                        <Center>
                            <Image
                            src={product.image}
                            borderRadius='lg'
                            />
                        </Center>
                        <Text fontSize={20} textAlign={'center'} fontWeight="bold">Descripcion</Text>
                        <Center>
                            <Text> {product.description}</Text>
                        </Center>
                        <Text fontSize={20} textAlign={'center'} fontWeight="bold">Categoria</Text>
                        <Center>
                            <Text> {product.category}</Text>
                        </Center>
                        <Text fontSize={20} textAlign={'center'} fontWeight="bold">Precio</Text>
                        <Center>
                            <Text> {product.price}</Text>
                        </Center>
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
