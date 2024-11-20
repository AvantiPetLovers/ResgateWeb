import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Navbar from '../components/navbar'
import Footer from '../components/footer'


export default function PetList() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container w-full min-h-screen m-20">
        <h1>Essa é a pagina de listagem de pets</h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <Footer />
    </>
  )
}
