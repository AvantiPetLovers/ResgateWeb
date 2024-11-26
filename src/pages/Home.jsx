import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';
import { findPets } from '../services/ApiService';
import PetCard from '../components/PetCard';


export default function Home() {
    const navigate = useNavigate();
    const [pets, setPets] = useState([])

    // Busca os pets no banco de dados
    useEffect(() => {
      const listPets = async () => {
        const { data } = await findPets();
        setPets(data.slice(0, 4));
      };
      listPets();
    }, []);

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

            <div className="m-12 ">
                <div className="flex justify-between mb-8">
                    <div>
                        <h1 className="font-bold text-xs ">Quer Adotar?</h1>
                        <span className="font-bold text-2xl text-sky-950">Confira Nossos Pets</span>
                    </div>
                    <button
                        onClick={() => navigate("/pet")}
                        className="border border-sky-950 text-sky-950 font-semibold py-2 px-4 rounded-full hover:bg-sky-950 hover:text-white transition duration-300" >
                        {'Ver mais >'}
                    </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                    {pets.map((pet) => (
                        <PetCard key={pet.id} pet={pet} />
                    ))}
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
