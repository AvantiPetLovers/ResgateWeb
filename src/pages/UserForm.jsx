import { useState } from 'react'


export default function UserForm() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <h1>Essa é a pagina de cadastro de novo usuario</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}
