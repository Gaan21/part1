import React from 'react'
import './App.css';


//Los componentes se deben de crear fuera de otros componentes
 const Titulo = () => {   //Mayusculas, si no da error
  return <h1>Hola mundo</h1>
} 


const course = {
  nombre: 'Half Stack application development',
  partesArr: [
    { 
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name:'State of a component',
      exercises: 14
    }
  ]
}
 
 
 

const Title = ( props ) => {
  return <h1>{props.titulo}</h1>
}


const Content = ( props ) => {
  return (
    
    <div>
        <p>  {props.mensaje1} {props.ejercicio1} </p>
        <p>  {props.mensaje2} {props.ejercicio2} </p>
        <p>  {props.mensaje3} {props.ejercicio3} </p>
    </div> 
  ) 
}


const Total = ( props ) => {
  return (
    <p> Number of exercises: 
      {course.partesArr[0].exercises + course.partesArr[1].exercises + course.partesArr[2].exercises}</p>
  )
} 


//Con las cosas dentro del array
const App = () => {
 
  return (
    <div>
      <Title titulo={course.nombre} />
      <Content mensaje1={course.partesArr[0].name} ejercicio1={course.partesArr[0].exercises}
       mensaje2={course.partesArr[1].name} ejercicio2={course.partesArr[0].exercises}
       mensaje3={course.partesArr[2].name} ejercicio3={course.partesArr[0].exercises}/>   
      <Total/>
      
    </div>
  )
}

//Sin las parts dentro del Array
/* const App = () => {
 
  return (
    <div>
      <Title titulo={course} />
      <Content mensaje1={part1.name} ejercicio1={part1.exercises}
       mensaje2={part2.name} ejercicio2={part2.exercises}
       mensaje3={part3.name} ejercicio3={part3.exercises}/>   
      <Total/>
      
    </div>
  )
} */

export default App;