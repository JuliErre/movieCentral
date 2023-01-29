import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from "./app/store";
import { Provider } from "react-redux";
import {ChakraProvider} from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <ChakraProvider>
    <App />
  </ChakraProvider>
  </React.StrictMode>
  </Provider>
)
