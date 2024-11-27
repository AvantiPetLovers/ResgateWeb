import { useContext, useEffect, useState } from 'react'
import { ApiService } from '../services/ApiService'
import PetCard from '../components/PetCard';
import { AuthContext } from '../contexts/AuthContext';


export default function PetList() {
  const [pets, setPets] = useState([])
  const { token } = useContext(AuthContext);

  // Busca os pets no banco de dados
  useEffect(() => {
    const { findPets } = ApiService(token);

    const listPets = async () => {
      const { data } = await findPets();
      setPets(data);
    };
    listPets();
  }, [token]);


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
