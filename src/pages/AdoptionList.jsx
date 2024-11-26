import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function AdoptionList() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <h1>Essa é a pagina de controle de adocao</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>

    </>
  )
}
