import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Navbar from '../components/navbar'


export default function PetDetail() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='m-20'>
        <h1>Essa é a pagina de detalhes do pet</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  )
}
