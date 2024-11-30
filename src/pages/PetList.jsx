import { useContext, useEffect, useState } from 'react'
import { ApiService } from '../services/ApiService'
import { AuthContext } from '../contexts/AuthContext';
import PetCard from '../components/PetCard';
import FilterGroup from '../components/FilterGroup';

const species = ['DOG', 'CAT', 'RABBIT', 'FISH', 'BIRD', 'TURTLE', 'SNAKE', 'OTHER'];
const personality = ['CALM', 'AGGRESSIVE', 'PLAYFUL', 'INDEPENDENT', 'DEPENDENT', 'LOYAL', 'CURIOUS', 'LOVING'];
const size = ['SMALL', 'MEDIUM', 'LARGE'];

export default function PetList() {
  const [pets, setPets] = useState([])
  const [allPets, setAllPets] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState(species);
  const [selectedPersonality, setSelectedPersonality] = useState(personality);
  const [selectedSize, setSelectedSize] = useState(size);
  const { token } = useContext(AuthContext);

  // Busca os pets no banco de dados
  useEffect(() => {
    const { findPets } = ApiService(token);

    const fetchPets = async () => {
      const { data } = await findPets();
      setAllPets(data);
      setPets(data);
    };

    fetchPets();
  }, [token]);

  // Filtra os dados com a mudanca dos filtros
  useEffect(() => {
    const filteredPets = allPets.filter(
      (pet) =>
        (selectedSpecies.length === 0 || selectedSpecies.includes(pet.species)) &&
        (selectedPersonality.length === 0 || selectedPersonality.includes(pet.personality)) &&
        (selectedSize.length === 0 || selectedSize.includes(pet.size))
    );
    setPets(filteredPets);
  }, [allPets, selectedSpecies, selectedPersonality, selectedSize]);

  // Atualiza os estados com a mudanca dos filtros
  const handleFilterChange = (event, setFilter) => {
    const { value, checked } = event.target;
    setFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="flex">
      <aside className="w-1/5 bg-gray-50 p-4">
        <h2 className="font-bold text-2xl text-sky-950">Filtros</h2>
        <FilterGroup
          label="Espécie"
          options={species}
          selectedOptions={selectedSpecies}
          onChange={(e) => handleFilterChange(e, setSelectedSpecies)}
        />
        <FilterGroup
          label="Personalidade"
          options={personality}
          selectedOptions={selectedPersonality}
          onChange={(e) => handleFilterChange(e, setSelectedPersonality)}
        />
        <FilterGroup
          label="Tamanho"
          options={size}
          selectedOptions={selectedSize}
          onChange={(e) => handleFilterChange(e, setSelectedSize)}
        />
      </aside>

      <div className="w-4/5 bg-white p-4">
        <div className="flex gap-8 mb-8">
          <h1 className="font-bold text-2xl text-sky-950">Adotar</h1>
          <span className="text-xs font-bold pt-3">{pets.length} resultados encontrados</span>
        </div>
        <div className="flex flex-wrap mb-8 overflow-hidden">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  )
}

