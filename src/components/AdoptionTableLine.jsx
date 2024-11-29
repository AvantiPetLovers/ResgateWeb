import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ApiService } from "../services/ApiService";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { translate } from "../utils/EnumTranslator";
import { useNavigate } from "react-router-dom";


export default function AdoptionTableLine({ adoption, updateAdoptionStatus }) {
    const { token } = useContext(AuthContext);
    const [user, setUser] = useState({})
    const [pet, setPet] = useState({})
    const [status, setStatus] = useState(adoption.status)
    const navigate = useNavigate();

    const handleApproval = async () => {
        const { approveAdoption } = ApiService(token);
        await approveAdoption(adoption.pet_id, adoption.user_id)
        setStatus('APPROVED')
        updateAdoptionStatus(adoption.user_id, adoption.pet_id, 'APPROVED')
    }

    const handleRejection = async () => {
        const { rejectAdoption } = ApiService(token);
        await rejectAdoption(adoption.pet_id, adoption.user_id)
        setStatus('REJECTED')
        updateAdoptionStatus(adoption.user_id, adoption.pet_id, 'REJECTED')
    }

    // Busca os adocoes no banco de dados
    useEffect(() => {
        const { findUserById, findPetById } = ApiService(token);

        const getUser = async (user_id) => {
            const { data } = await findUserById(user_id)
            setUser(data)
        }
        const getPet = async (pet_id) => {
            const { data } = await findPetById(pet_id)
            setPet(data)
        }
        getUser(adoption.user_id)
        getPet(adoption.pet_id);
    }, [adoption, token]);


    return (
        <tr className="text-gray-600 border-b">
            <td className="font-semibold p-4">
                <div className="flex flex-row">
                    <img src={user.img} className="w-10 h-10 object-cover rounded-full" alt={user.name} />
                    <div className="flex flex-col ml-4">
                        <span>{user.name}</span>
                        <span className="text-xs font-normal">{user.email}</span>
                    </div>
                </div>
            </td>
            <td className="font-semibold p-4 cursor-pointer" onClick={() => navigate(`/pet/${pet.id}`)}>
                <div className="flex flex-row">
                    <img src={pet.img} className="w-10 h-10 object-cover rounded-full" alt={pet.name} />
                    <div className="flex flex-col ml-4">
                        <span>{pet.name}</span>
                        <span className="text-xs font-normal">{translate(pet.species)}</span>
                    </div>
                </div>
            </td>
            <td className="font-semibold text-xs p-4">
                {status === 'APPROVED' && <span className="inline-block px-2 py-1 text-green-500 bg-green-100 rounded-full">Aprovado</span>}
                {status === 'REJECTED' && <span className="inline-block px-2 py-1 text-red-500 bg-red-100 rounded-full">Rejeitado</span>}
                {status === 'PENDING' && <span className="inline-block px-2 py-1 text-gray-500 bg-gray-100 rounded-full">Pendente</span>}
            </td>
            <td className="font-semibold p-4">
                <span className="inline-block text-xs text-gray-500 ">
                    {new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(adoption.adoption_date))}
                </span>
            </td>
            <td className="font-semibold p-4">
                {status === 'PENDING' && (
                    <div className="flex space-x-4">
                        <button className="text-green-500 hover:text-green-700 transition duration-300" onClick={handleApproval}>
                            <FaCheck className="w-6 h-6" />
                        </button>
                        <button className="text-red-500 hover:text-red-700 transition duration-300" onClick={handleRejection}>
                            <FaXmark className="w-6 h-6" />
                        </button>
                    </div>
                )}
            </td>

        </tr>
    )

}

