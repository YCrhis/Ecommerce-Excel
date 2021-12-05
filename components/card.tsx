import React from 'react'
import { Stack, Text, Button, Image } from '@chakra-ui/react'


const Card = ({ image, title, price, id, handleAddProduct, product, description }) => {

    return (
        <>
            <Stack key={id} borderRadius="md" fontWeight="500" textAlign="center">
                <Image
                    src={image}
                    cursor="pointer"
                    maxHeight={300}
                    layoutId={image}
                />
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text color="green.500">{price}</Text>
                <Button colorScheme="primary" variant="outline" onClick={() => handleAddProduct(product)}> Agregar</Button>
            </Stack>
        </>
    )
}
export default Card