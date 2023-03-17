import './App.css'
import { Button, ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Fragment } from 'react'


function App() {
  

  return (
    
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
    
  )
}

export default App
