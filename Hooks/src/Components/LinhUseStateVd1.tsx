import { useState } from "react";

function LinhUseStateVd1() {
    const [counter, setCounter] = useState(1);

    const handleIncrease = () => {
        setCounter(counter +1);
        setCounter(counter +1);
        setCounter(counter +1);
    }

    return(
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default LinhUseStateVd1;