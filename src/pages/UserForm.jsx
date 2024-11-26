import { useState } from 'react'
import { Button } from "@/components/ui/button"


export default function UserForm() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <h1>Essa é a pagina de cadastro de novo usuario</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>

    </>
  )
}
