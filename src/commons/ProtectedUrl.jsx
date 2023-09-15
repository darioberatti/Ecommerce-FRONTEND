import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const ProtectedUrl = ({ children }) => {
  const usuario = useSelector((state)=> state.user.value)
  
  if(!usuario.isAdmin) return <Navigate to="/" /> 

  return children
}

export default ProtectedUrl