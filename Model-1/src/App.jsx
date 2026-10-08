import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Sum from './Components/Sum'
function App() {
  const Sum = () => {
    return (
        <>
            <div>Sum</div>
            <div>
                Sum is: {100 + 200}
            </div>
        </>
    )
    
}

  
  return (
    <>
      <div>
        <h1>This is the React function component App example</h1>
      </div>

     <div>
      <Sum/>
     </div>
    </>
  
  )
}

export default App