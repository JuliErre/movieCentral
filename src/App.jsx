import { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import HomeScreen from './screens/HomeScreen'
import Routes from './routes/Routes'
import { Flex, VStack } from '@chakra-ui/react'
import SearchInput from './components/search/SearchInput'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <VStack maxWidth={"100vw"} minHeight={"100vh"} spacing={0} margin={0} bgColor='gray.800' position='relative'>
        <BrowserRouter>
        <Routes/>
        <Navbar/>
        </BrowserRouter>
    </VStack>
    
  )
}

export default App
