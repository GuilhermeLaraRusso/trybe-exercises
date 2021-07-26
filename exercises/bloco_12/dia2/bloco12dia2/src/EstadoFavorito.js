import React from 'react';

class EstadoFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props

    return (
      <label>
          Diga qual é o seu Estado favorito! do Brasil ou do React
          <textarea 
            name="estadoFavorito" 
            value={value} 
            onChange={handleChange}></textarea>
      </label>
    )
  }
}

export default EstadoFavorito;
