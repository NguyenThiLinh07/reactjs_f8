import { useState } from "react";
import React from 'react'
import ContentUseEffect from "./ContentUseEffect";


const AppUseEffect = () => {
    const [show, setShow] = useState<boolean>(false);
    
  return (
    <div>
        <button onClick={() => setShow(!show)}>Linh ngu</button>
        {show && <ContentUseEffect/>}
    </div>
  )
}

export default AppUseEffect