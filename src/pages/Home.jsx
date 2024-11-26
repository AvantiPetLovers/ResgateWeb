import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate();


    return (
        <>
            {/* TODO: Issue 4 */}
            <div className="bg-blue-500 flex m-12 p-6 rounded h-[500px]	">
                <div>
                    <h1>Lorem ipsum Lorem</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium doloribus voluptas in nam quasi id hic quisquam deserunt rerum molestiae soluta placeat quidem, animi eveniet, sapiente explicabo ea perspiciatis?</p>
                    <Button onClick={() => navigate("/adoption")}>
                        Quero adotar um pet
                    </Button>
                </div>
                <div>
                    <img src="https://placehold.co/1300x1200" />
                </div>
            </div>


            

            {/* TODO: Issue 6 */}
            <div className="bg-blue-500 flex m-12 p-6 rounded h-[300px]">
                <div>
                    <h1>Sobre a resgate</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium doloribus voluptas in nam quasi id hic quisquam deserunt rerum molestiae soluta placeat quidem, animi eveniet, sapiente explicabo ea perspiciatis?</p>
                </div>
                <div>
                    <img src="https://placehold.co/1300x650" />
                </div>
            </div>

            {/* TODO: Issue 6 */}
            <div className="bg-blue-500 flex m-12 p-6 rounded h-[300px]">
                <div>
                    <h1>Contato</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium doloribus voluptas in nam quasi id hic quisquam deserunt rerum molestiae soluta placeat quidem, animi eveniet, sapiente explicabo ea perspiciatis?</p>
                </div>
                <div>
                    <img src="https://placehold.co/1300x650" />
                </div>
            </div>

        </>
    )
}
