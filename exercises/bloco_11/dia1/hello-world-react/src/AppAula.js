import './App.css';
import HelloWorld from './HelloWorld';
import Componente from './Component';

function sayHelloAmigos() {
  const sum = 15 + 15;
  return `Hello Amigos ${sum}`;
}

function App() {
  const nomes = ['Gabs', 'Rapunzel', 'Varibé', 'Gui Gomes'];
  return (
    <div>
      <HelloWorld /> <Componente></Componente>
      <span className='App-Hello'>{sayHelloAmigos()}</span>
      <ul>
        {nomes.map(nome => <li>{nome}</li>)}
      </ul>
    </div>
  )
}

export default App;
