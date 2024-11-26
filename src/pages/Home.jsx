import { useState } from 'react'
import { Button } from "@/components/ui/button"


export default function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="">
                <h1>Essa é a pagina de home</h1>
                <Button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
            </div>
        </>
    )
}
