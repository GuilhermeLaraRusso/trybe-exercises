import logo from './logo.svg';
import './App.css';
import pokemons from './data';
import PokemonCard from './PokemonCard';

function App() {
  return (
    <div className="pokemon-list">
      { pokemons.map(({id, name, type, image, averageWeight}) =>
        <PokemonCard
          key={id}
          name={name}
          type={type}
          image={image}
          averageWeight={averageWeight}
      />
      )}
    </div>
  );
}

export default App;
