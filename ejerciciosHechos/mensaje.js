const Mensaje = ( props ) => {
    return <h1 style={{color: props.color}}>
        {props.msg}</h1>
    //En react hay que pasar un objeto para el style
  }

  
  export default Mensaje