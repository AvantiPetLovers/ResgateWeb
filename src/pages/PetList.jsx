import { useEffect, useState } from 'react'
import { findPets } from '../services/ApiService'
import PetCard from '../components/PetCard';


export default function PetList() {
  const [pets, setPets] = useState([])

  // Busca os pets no banco de dados
  useEffect(() => {
    const listPets = async () => {
      const { data } = await findPets();
      setPets(data);
    };
    listPets();
  }, []);


  return (
    <div className="flex">
      <aside className="w-1/5 bg-gray-50 p-4">
        <h2 className="font-bold text-2xl text-sky-950">Filtros</h2>
        {/* TODO: Issue 7 */}
      </aside>

      <div className="w-4/5 bg-white p-4">
        <div className="flex gap-8 mb-8">
          <h1 className="font-bold text-2xl text-sky-950">Adotar</h1>
          <span className="text-xs font-bold pt-3">{pets.length} resultados encontrados</span>
        </div>
        <div className="flex flex-wrap gap-8 mb-8">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>

  )
}
