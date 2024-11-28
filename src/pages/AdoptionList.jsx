import { useContext, useEffect, useState } from 'react'
import AdoptionTableLine from '../components/AdoptionTableLine'
import { AuthContext } from '../contexts/AuthContext';
import { ApiService } from '../services/ApiService';
import { FaCalendarDays, FaEllipsisVertical, FaPaw, FaStamp, FaUser } from 'react-icons/fa6';

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
    <div className='flex flex-col gap-8 m-12'>
      <div className="flex gap-8 mb-8">
        <h1 className="font-bold text-2xl text-sky-950">Pedidos de adoção</h1>
        <span className="text-xs font-bold pt-3">{adoptions.length} solicitações encontradas</span>
      </div>

      <table className="rounded border-gray-300 border">
        <thead>
          <tr className='text-blue-800 bg-cyan-100'>
            <th className="font-semibold p-4"><span className='flex items-center gap-2'><FaUser />Adotante</span></th>
            <th className="font-semibold p-4"><span className='flex items-center gap-2'><FaPaw />Pet</span></th>
            <th className="font-semibold p-4"><span className='flex items-center gap-2'><FaStamp />Status</span></th>
            <th className="font-semibold p-4"><span className='flex items-center gap-2'><FaCalendarDays />Data do pedido</span></th>
            <th className="font-semibold p-4"><span className='flex items-center gap-2'><FaEllipsisVertical />Ações</span></th>
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
