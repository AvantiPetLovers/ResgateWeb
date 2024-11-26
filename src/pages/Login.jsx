import { useState } from 'react'
import { Button } from "@/components/ui/button"


export default function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <h1>Essa é a pagina de login</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <span>
          Novo aqui?<a className='text-sky-950 font-bold' href="/register">Cadastre-se</a>
        </span>
      </div>
    </>
  )
}
