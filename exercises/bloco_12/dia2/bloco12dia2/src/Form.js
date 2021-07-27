import React from 'react';
import EstadoFavorito from './EstadoFavorito';

class Form extends React.Component{
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      name: '',
      email: '',
      age: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    alert(`O login deu certo! ${email}`);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }
  
  render() {
    return(
      <div>
        <h1>Estados e React: ferramenta incrivel ou reagindo a regionalismo</h1>
        <form className="form">
          <EstadoFavorito value={this.state.EstadoFavorito} handleChange={this.handleChange} />
          <label htmlFor='email'>
            Email
            <input 
              type="email" 
              name="email"
              id='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="name">
            Name  <input 
              type="name" 
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              />
          </label>
          <label htmlFor="age">
            Age <input 
              type="number" 
              name="age"
              id="age"
              value={this.state.age}
              onChange={this.handleChange}
              />
          </label>
        </form>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
      )
  }
}

export default Form;