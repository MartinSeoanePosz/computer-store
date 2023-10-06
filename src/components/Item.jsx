import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '@chakra-ui/react';
import { CardBody } from '@chakra-ui/react';
import { CardFooter } from '@chakra-ui/react';
import { ButtonGroup } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';


function Item({ product }) {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={product.image}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3' >
                    <Heading size='md' >{product.name}</Heading>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Link to={`/item/${product.id}`}>                   
                        <Button variant='solid' colorScheme="teal">
                            See Detail
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Item;


