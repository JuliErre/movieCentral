import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutBtn = () => {
    const navigate  = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("name");

        navigate("/login");
    }

  return (
    <Button onClick={handleLogout} size={'lg'} colorScheme='cyan' variant='outline'> Sign Out </Button>
  )
}

export default LogoutBtn