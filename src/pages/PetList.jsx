import { useEffect, useState } from 'react'
import { findPets } from '../services/ApiService'


export default function PetList() {
  const [pets, setPets] = useState()

  // Busca os pets no banco de dados
  useEffect(() => {
    const listPets = async () => {
      const { data } = await findPets();
      setPets(data);
    };
    listPets();
  }, []);


  return (
    <>
      <div className="grid grid-flow-col gap-4">
        <div className="col-span-2 bg-blue-100">01</div>
        <div className="col-span-6 bg-blue-100">02</div>
      </div>
    </>
  )
}
