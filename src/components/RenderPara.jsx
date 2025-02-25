import React, {useState} from 'react'

const RenderPara = ()=> {
  const [showtext, setShowtext] = useState(false)
  return (
    <div>
        <button onClick={()=> setShowtext(true)} id="click">Show Text</button>
        {showtext ?
         <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
         : ''
        }
    </div>
  )
}

export default RenderPara