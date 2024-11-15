import { useState } from 'react'
import resgateLogo from './assets/react.svg'
import { Button } from "@/components/ui/button"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-5'>
      <div>
        <img src={resgateLogo} className="logo react" alt="React logo" />
      </div>

      <h1>Resgate</h1>

      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  )
}

export default App
