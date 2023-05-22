import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter/Counter';


// const getSum = (num1, num2) => {
//   return num1 + num2
// }

function App() {

  // let name = 'Idan'
  let tempName = 'Idan'
  const [name, setName] = useState('Idan')

  console.log('Rendering App component with name', name)

  const handleClick = () => {
    // name = 'Gal'
    console.log('Inside handleClick')
    tempName = 'Gal'
    if (name === 'Gal') {
      setName('Idan')
    } else {
      setName('Gal')
    }
  }

  return (
    <>
      <h2>Hello World</h2>
      <p>Hi {name}</p>
      <button onClick={handleClick}>Switch name</button>
      <br />
      <hr />
      <br />
      <Counter />
    </>
  )
}

//elem = document.createElement('h2')
//elem.innerText = 'Hello World'
// <button onClick="handleClick()">Switch name</button>

export default App;
