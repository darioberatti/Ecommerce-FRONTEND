import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: '' });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    axios
      .post('/api/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          // Redireccionar al dashboard u otra página después del inicio de sesión exitoso
          this.props.history.push('/register'); 
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          this.setState({ error: 'Credenciales incorrectas' });
        } else {
          this.setState({ error: 'Hubo un problema al iniciar sesión' });
        }
      });
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div>
        <h2>Iniciar sesión</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Iniciar sesión</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    );
  }
}

export default Login;