import { useContext, useEffect, useState } from 'react';
import AdoptionTableLine from '../components/AdoptionTableLine';
import { AuthContext } from '../contexts/AuthContext';
import { ApiService } from '../services/ApiService';
import { FaCalendarDays, FaEllipsisVertical, FaPaw, FaStamp, FaUser } from 'react-icons/fa6';

export default function AdoptionList() {
  const [adoptions, setAdoptions] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const { token } = useContext(AuthContext);

  // Busca os adocoes no banco de dados
  useEffect(() => {
    const { findAdoptions } = ApiService(token);

    const fetchAdoptions = async () => {
      const { data } = await findAdoptions();
      setAdoptions(data);
    };

    fetchAdoptions();
  }, [token]);


  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const filteredAdoptions = adoptions.filter((adoption) => {
    if (statusFilter === '') {
      return true;
    }
    return adoption.status === statusFilter;
  });


  return (
    <div className='flex flex-col gap-8 m-12'>
      <div className='flex flex-row justify-between items-center'>

        <div className="flex gap-8 mb-8">
          <h1 className="font-bold text-2xl text-sky-950">Pedidos de adoção</h1>
          <span className="text-xs font-bold pt-3">{filteredAdoptions.length} solicitações encontradas</span>
        </div>
        <select id="statusFilter" className="font-semibold h-12 px-4 rounded-full appearance-none transition duration-300 border border-gray-500 text-gray-500 hover:bg-blue-800 hover:text-white" onChange={handleStatusFilterChange}>
          <option value="" className='text-blue-800 bg-gray-100 hover:bg-blue-800'>Visualização: Todos</option>
          <option value="PENDING" className='text-blue-800 bg-gray-100 hover:bg-blue-800'>Visualização: Pendente</option>
          <option value="APPROVED" className='text-blue-800 bg-gray-100 hover:bg-blue-800'>Visualização: Aprovado</option>
          <option value="REJECTED" className='text-blue-800 bg-gray-100 hover:bg-blue-800'>Visualização: Rejeitado</option>
        </select>
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
          {filteredAdoptions.map((adoption) => (
            <AdoptionTableLine key={[adoption.user_id, adoption.pet_id]} adoption={adoption} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
