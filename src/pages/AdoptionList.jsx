import { useContext, useEffect, useState } from 'react'
import AdoptionTableLine from '../components/AdoptionTableLine'
import { AuthContext } from '../contexts/AuthContext';
import { ApiService } from '../services/ApiService';

export default function AdoptionList() {
  const [adoptions, setAdoptions] = useState([]);
  const { token } = useContext(AuthContext);

  // Busca os adocoes no banco de dados
  useEffect(() => {
    const { findAdoptions } = ApiService(token);

    const listPets = async () => {
      const { data } = await findAdoptions();
      setAdoptions(data);
    };
    listPets();
  }, [token]);


  return (
    <div className='flex w-full'>
      <table className="border border-slate-500 w-full">
        <thead>
          <tr>
            <th className="border border-slate-600 min-w-5/6">Adotante</th>
            <th className="border border-slate-600 min-w-5/6">Pet</th>
            <th className="border border-slate-600 min-w-5/6">Status</th>
            <th className="border border-slate-600 min-w-5/6">Ações</th>
          </tr>
        </thead>
        <tbody>
          {adoptions.map((adoption) => (
            <AdoptionTableLine key={[adoption.user_id, adoption.pet_id]} adoption={adoption} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
