import React from 'react';
import pokemons from './data';

class PokemonCard extends React.Component {
  render() {
    const { id, name, type, image } = this.props;
    return (
      <section className='pokemon-card'>
        <p>{id}</p>
        <p>{name}</p>
        <p>{type}</p>
        <img src={image} alt='Imagem pokemon' />
        <p>Average weight: {this.props.averageWeight.value} {this.props.averageWeight.measurementUnit}</p>
        
      </section>
    )
  }
}

export default PokemonCard;