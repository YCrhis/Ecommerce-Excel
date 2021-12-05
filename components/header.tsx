import { Container, Flex, Text, Spacer, Button, Box } from "@chakra-ui/react"
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <Container maxWidth="container.xl" mt={6}>
                <Flex alignItems="center">
                    <Text fontWeight="bolder" fontSize="27px">HOLIDAY</Text>
                    <Spacer />
                    <Box>
                        <Button
                            colorScheme='teal'
                            variant='link'
                            mr="5"
                        >
                            <Link href="/">
                                Products
                            </Link>
                        </Button>
                        <Button
                            colorScheme='teal'
                            variant='link'
                        >
                            <Link href="/suplier">
                                Clothes
                            </Link>
                        </Button>
                    </Box>
                </Flex>
            </Container>
        </>
    )
}
export default Header