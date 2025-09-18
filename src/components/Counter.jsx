import { useState } from "react"

export default function Counter (){
 const [count, setCount] = useState(0);

 const headler = () => {
 const newCounter = count + 1;
 setCount(newCounter)
    
 }

    const counterStyle = {
        border: '3px solid yellow'
    }
    return(
        <div style={counterStyle}>
            <h2>count : {count}</h2>
            <button onClick={headler}>Add</button>
        </div>
    )
}