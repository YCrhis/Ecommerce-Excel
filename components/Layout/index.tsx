import { Container, Text } from "@chakra-ui/layout"
import Header from "../header"

const Content = ({ children }) => {
    return (
        <>
            <Header />
            <Container maxWidth="container.xl" p={4} my={10}>
                <Text align="center" fontWeight="bolder" fontSize="25px" mb="3">HoliShop</Text>
                <Text align="center" mb="10">Just Take a moment to see our products, you can find someting that you want</Text>
                {children}
            </Container>
        </>
    )
}
export default Content