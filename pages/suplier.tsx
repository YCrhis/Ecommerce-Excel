import { GetStaticProps } from "next"
import api from "../supplier/api"
import { Supplier } from "../supplier/type"

import React from 'react'
import { Stack, Text, Button, Image, Grid } from '@chakra-ui/react'


interface Props {
    suppliers: Supplier[];
}


const Supplier: React.FC<Props> = ({ suppliers }) => {
    console.log(suppliers)
    return (
        <Grid gap={6} templateColumns="repeat(auto-fill, minmax(260px, 1fr))">
            {suppliers.map(i => (
                <Stack key={i.id} borderRadius="md" fontWeight="500" textAlign="center">
                    <Image
                        src={i.image}
                        cursor="pointer"
                        maxHeight={300}
                    />
                    <Text>{i.name}</Text>
                    <Text color="green.500">{i.clients}</Text>
                </Stack>
            ))}
        </Grid>
    )
}
export default Supplier

export const getStaticProps: GetStaticProps = async () => {
    const suppliers = await api.list();

    return {
        props: {
            suppliers
        },
        revalidate: 10
    }

}