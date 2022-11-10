import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import HomeScreen from './screens/HomeScreen'
import Routes from './routes/Routes'
import { VStack } from '@chakra-ui/react'
import SearchInput from './components/search/SearchInput'

function App() {
  return (
    <VStack maxWidth={"100vw"} minHeight={"100vh"} spacing={0} margin={0} bgColor='gray.800' position='relative'>
        <BrowserRouter>
        <SearchInput/>
        <Routes/>
        </BrowserRouter>
    </VStack>
    
  )
}

export default App
