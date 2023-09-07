import React from 'react';
import { Link } from 'react-router-dom'; 

const LoginButton = () => {
  return (
    <Link to="/login">
      <button>Iniciar sesión</button>
    </Link>
  );
}

export default LoginButton;

