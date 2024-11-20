import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Navbar from '../components/navbar'


export default function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar /> {/* Remover quando implementar ja que o login nao tem navbar */}
      <div className="container w-full min-h-screen m-20">
        <h1>Essa é a pagina de login</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  )
}
