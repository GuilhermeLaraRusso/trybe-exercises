import './App.css';
import HelloWorld from './HelloWorld';
import Componente from './Component';

const Task = (value) => {
  return (
    <ul>{value}</ul>
  );
}


function App() {
  const ArrayDeCompromissos = ['Estudar', 'Cuidar dos meus filhos', 'Cuidar da minha esposa', 'Dormir'];
  return (
    <div>
      {Task("Compromissos")}
      {ArrayDeCompromissos.map(compromisso => <li>{compromisso}</li>)}
    </div>
  )
}

export default App;
