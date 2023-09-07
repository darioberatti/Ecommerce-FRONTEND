import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginButton from './LoginButton';
import LoginForm from './LoginForm'; // Crea un componente LoginForm

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          {/* Otras rutas de la aplicación */}
          <Route path="/login" component={LoginForm} />
        </Switch>
        <LoginButton />
      </div>
    </Router>
  );
}

export default App;

