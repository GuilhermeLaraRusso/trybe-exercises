// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            onChange={(event) => this.handleInput(event)}
            name='nome'
            value={this.state.nome}
            data-testid='input-nome'
          />
        </p>
        <p>
          E-mail:
          <input
            onChange={(event) => this.handleInput(event)}
            name='email'
            value={this.state.email}
            data-testid='input-email'
          />
        </p>
      </div>
    )
  }
}

export default App;