import ReactDOM from 'react-dom';

//Hook(gancho): NO PUEDEN IR ENTRE CONDICIONALES
import {useState} from 'react';

//El punto de entrada(rootElement) esta buscando un elemento en el html
const rootElement = document.getElementById('root');


//Se puede pasar un estado de otro componente a un componente como prop
const Counter = ({number}) => {
  //RENDERIZADO DE REACT ES DISTINTO A RENDERIZADO EN EL DOOM.
  //EL DE REACT SE EJECUTA PERO SI NO CAMBIA EL VALOR NO RENDERIZA EL DOOM
  console.log('counter render')
  return <h1>{number}</h1>
}


const App = (props) => {

  const [estado, updateEstado] = useState(0)
  //Devuelve un array de 2 posiciones, la 1ª devuelve el valor del estado actual 
  //y la 2ª devuelve un metodo que al ejecutarlo podemos actualizar ese estado
  
  const handleClick = () => {
    updateEstado((prevContador) => {
      return prevContador + 1
    })
  }

  const handleClickReset = () => {
    updateEstado(0)
  }

  const esPar = estado % 2 === 0 
  const mensajePar = esPar ? 'Es par' : 'Es impar'

  console.log('render');
  

  return (
    <div>
      <p>El valor del estado es:</p>
      <Counter number={estado} />
      <p>{mensajePar}</p>
      <button onClick={ handleClick
        //Hay que pasarle una funcion y no la ejecucion de una funcion
        //Para no hacer un loop infinito y ejecutar el metodo solo cuando se
        //hace un click    
      }>
        Incrementar
      </button>

      <button onClick={handleClickReset}>Reset</button>
    </div>
  )
}


  ReactDOM.render(
    <App  />, 
    rootElement
  );

  export default App;