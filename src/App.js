import React from 'react'
import './App.css';


const Hello = ( {name,age} ) => {

    const bornYear = () => new Date().getFullYear() -age

    return (
        <div>
            <p> Hello {name} you are {age} years old</p>
            <p>You born in {bornYear()} </p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Hello name={'Luciano'} age={30} />
        </div>
    )
}


export default App;