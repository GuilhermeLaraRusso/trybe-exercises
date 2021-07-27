import React from 'react';
import Adress from './Address';
import City from './City';
import CPF from './CPF';
import Email from './Email';
import House from './House';
import Name from './Name';
import Estado from './Estado';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  estado: ''
}

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.state = INITIAL_STATE;
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleClear() {
    this.setState(INITIAL_STATE);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    })
  }
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <Name value={this.state.name} handleChange={this.handleChange} /> <br />
            <Email value={this.state.email} handleChange={this.handleChange}/> <br />
            <CPF value={this.state.cpf} handleChange={this.handleChange}/> <br />
            <Adress value={this.state.address} handleChange={this.handleChange}/> <br />
            <City value={this.state.city} handleChange={this.handleChange}/> <br />
            <Estado /> <br />
            <House value={this.state.estado} handleChange={this.handleChange} />
          <input type="submit" />
          <button onClick={this.handleClear}>Clear</button>
          </fieldset>
          <fieldset>

          </fieldset>

        </form>
      </div>
    )
  }
}

export default Form