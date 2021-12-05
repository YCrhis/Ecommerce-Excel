import React from 'react'
import '../styles/globals.css'
import { ChakraProvider, Container } from '@chakra-ui/react'
import {AppProps} from 'next/app'
import theme from '../theme'
import Content from '../components/Layout'

const App:React.FC<AppProps> =({ Component, pageProps }) =>{
  return (
    <ChakraProvider theme={theme}>
      <Content>
        <Component {...pageProps} />
      </Content>
    </ChakraProvider>  
  )
};

export default App
