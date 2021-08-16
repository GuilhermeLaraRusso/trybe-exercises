import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value});
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
        </label>
        <input
          type="email"
          value={email}
          id="id-email"
          onChange={(event) => this.changeEmail(event.target.value)}
        />
        <input
          type="button"
          id="btn-send"
          data-testid="id-send"
          value="Enviar"
          onClick={() => this.changeSaveEmail(email)}
        />
        <input
          type="button"
          id="btn-back"
          value="Voltar"
        />
        <h2 data-testid="id-email-user">
          {`Valor: ${saveEmail}`}
        </h2>
      </div>
    );
  }
  
}

export default App;
