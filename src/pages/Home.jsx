import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Navbar from '../components/navbar'


export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className='m-20'>
      <div>
      <h1>Resgate</h1>
      </div>


      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
    </>
  )
}
