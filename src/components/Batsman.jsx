import { useState } from "react"

export default function Batsman() {
    const [run, setRun] = useState(0);
    const [sixes, setSixes] = useState(0)

    const headleSingle = () =>{
        const updateRun =  run + 1;
        setRun (updateRun)
    }
    const headleFour = () => {
        const updeteFour = run + 4;
        setRun (updeteFour)

    }
    const heandleSix = () => {
        const updateSix = run + 6;
        const updeteSixs = sixes + 1;
        setSixes (updeteSixs)
        setRun (updateSix)
    }
    return(
        <div>
            <h3>player: Bangla batsman</h3>
            <p><small>six: {sixes} </small></p>
               
               {
                run > 50 && <p>congertulation your score: 50</p>
               }

            <h2>Score: {run} </h2>

            <button onClick={headleSingle}>singles</button>
            <button onClick={headleFour}>Four</button>
            <button onClick={heandleSix}>six</button>
        </div>
    )
}