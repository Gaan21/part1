
import './App.css';
import Mensaje from './Mensaje';

//Los componentes se deben de crear fuera de otros componentes
const Titulo = () => {   //Mayusculas, si no da error
  return <h1>Hola mundo</h1>
}


const App = () => {

  return (
    <div className="App">
      <Titulo />
      <Titulo />
      <Mensaje color = 'red' msg = 'Hola' />
      <Mensaje color = 'blue' msg = 'Mundo' />
      
    </div>
  );
}

export default App;
