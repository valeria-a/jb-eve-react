import { useState } from 'react'
import './Counter.css'

function Counter() {

    const [counter, setCounter] = useState(0)


    return(
        <div className="counter-box">
            <p style={{
                margin: '0px', 
                marginRight: "5px"}}>
                {counter}
            </p>
            <button onClick={() => setCounter(counter+1)}>+</button>
        </div>
    )
}


export default Counter