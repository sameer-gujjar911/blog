import '@/styles/globals.css'
import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'


export default function App({ Component, pageProps }) {
  return (
    <chakaraProvider>
      <Component {...pageProps} />
    </chakaraProvider>
  )
}
