import ReactDOM from 'react-dom';
import {useState} from 'react';
import './index.css';


const WarningNotUsed = () => {
  return <h1>Todavia no se ha usado el contador</h1>
}


//Como recibe el Array clicks si es un estado de otro componente
const ListOfClicks = ({clicks}) => {
  console.log({clicks});
  //debugger; //Detiene la ejecucion en este momento 
  return <p>{clicks.join(', ')}</p>
}


const inicialState = {
  left: 2,
  right:4,
  mensaje: 'Hola'
}


const App = () => { 
  //Los estados tienen que ser inmutables. No hacer counters.left ++
    //Estado, Cambiar estado
  //const [left, setLeft] = useState(0)
  //const [right, setRight] = useState(0)

  const [counters, setCounters] = useState(
   inicialState //El objeto se pone sin {}
    //clicks:0
  )
  //Evitar tener dos estados que hagan la misma operacion
  //Cliks totales se puede sacar con la longitus del array


  const [clicks, setClicks] = useState([])
  //Estado con un Array(Tiene que ser inmutable)


  const handleclickLeft = (event) => {
    const newCountersState = {
//Para copiar todas las propiedades de counters y actualizar solo las que queramos
      ...counters,  //  SpreadOperator
      left: counters.left +1
    }
    setCounters(newCountersState)

    setClicks(prevClicks => {
      return [...prevClicks, 'L']
    })
  }


  const handleclickrigth = () => {
    setCounters({
      ...counters,
      right: counters.right +1  
    })

    setClicks(prevClicks => {
      return [...prevClicks, 'R']
    })
  }


  const handleReset = () => {
    setCounters(
      inicialState  //El objeto se pone sin {} porque lo intenta desestructurar
    )

    setClicks(prevClicks => {
      return []
    })
  }

  //Devuelven un array con los elementos recibidos por el metodo filter 
  //que coinciden con el string
  const left = clicks.filter( click => click === 'L' )
  const rigth = clicks.filter( click => click === 'R' )
  

  //{() => setLeft(left + 1)}>
  //{() => setRight(right + 1)}>

  return (
    <div>
      {counters.left}
      <button onClick= {handleclickLeft}> 
        left
      </button>
      <button onClick= {handleclickrigth}>
        right
      </button>
      {counters.right}
      <p>
        <button onClick= {handleReset}>Reset</button>
      </p>
      <p> Clicks totales: {clicks.length}</p>

      {/* Renderizado condicional, si la longitud es 0 renderiza un componente
      y si no renderiza otro componente distinto */}
      {clicks.length === 0 
      ? <WarningNotUsed></WarningNotUsed>
      : <ListOfClicks clicks={clicks} />}
    </div>
  )
}


const rootElement = document.getElementById('root');

ReactDOM.render(
  <App  />, 
  rootElement
);

