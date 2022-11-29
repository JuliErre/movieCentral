import React from 'react'
import { useNavigate, Navigate,Outlet } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    if (!localStorage.getItem('id')) {
    //    navigate('/login') 
    return <Navigate to="/login" />
    }
  return <Outlet/>
}

export default ProtectedRoute