// rafce
import { useState } from "react";

function RandomGift() {
    const [girt, setGirt] = useState('Chưa lấy phần thưởng')

    const gifts:string[] = [
        'CPU 19',
        'RAM 32GB RGB',
        'RGB Keyboard'
    ]

    const handleUpdate = () => {
        setGirt(
            gifts[Math.floor(Math.random() *gifts.length)]
        )
    }

    return (
        <div className="App">
            <h1>{girt}</h1>
            <button onClick={handleUpdate}>Lấy phần thưởng</button>
        </div>
    )
}

export default RandomGift;