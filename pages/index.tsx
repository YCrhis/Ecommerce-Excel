import React from 'react'
import { GetStaticProps } from 'next'
import { Product } from '../product/types'
import api from '../product/api'
import { Grid, Stack, Button, Link, Box } from '@chakra-ui/react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import Card from '../components/card'

interface Props {
  products: Product[];
}

const parseCurrency = (value: number): string => {
  return value.toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
  })
}

const IndexRoute: React.FC<Props> = ({ products }) => {

  const [cart, setCart] = React.useState<Product[]>([])


  const handleAddProduct = (product: Product) => {
    setCart(cart => cart.concat(product))
  }

  const text = React.useMemo(() => {
    return cart.reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`),
      ``,
    ).concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`)
  }, [cart])


  return (
    <div>
      <AnimateSharedLayout type="crossfade">
        <Stack>
          <Grid gap={6} templateColumns="repeat(auto-fill, minmax(260px, 1fr))">
            {products.map(product => (
              <Card
                image={product.image}
                description={product.description}
                price={parseCurrency(product.price)}
                id={product.id}
                title={product.title}
                product={product}
                handleAddProduct={handleAddProduct}
              />
            ))}
          </Grid>

          <AnimatePresence>
            {cart.length && (
              <Box
                as={motion.div}
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                exit={{ scale: 0 }}
              >
                <Button
                  as={Link}
                  isExternal
                  size="sm"
                  href={`https://wa.me/898736733?text=${encodeURIComponent(text)}`}
                >Ver carrito ({cart.length} productos)</Button>
              </Box>
            )
            }
          </AnimatePresence>
        </Stack>
      </AnimateSharedLayout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();

  return {
    props: {
      products,
    },
    revalidate: 10
  };
};

export default IndexRoute
