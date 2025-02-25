import React, {Component, useState} from "react";
import "./../styles/App.css";
// import RenderPara from "./RenderPara";

function App() {
  const [showtext, setShowtext] = useState(false)
  return (
    <div id="main">
      <button onClick={()=> setShowtext(true)} id="click">Show Text</button>
        {showtext ?
         <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
         : ''
      }
    </div>
  );
}


export default App;
