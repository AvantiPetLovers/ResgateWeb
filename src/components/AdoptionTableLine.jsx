import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ApiService } from "../services/ApiService";
import { FaCheck, FaXmark } from "react-icons/fa6";


export default function AdoptionTableLine({ adoption }) {
    const { token } = useContext(AuthContext);
    const [user, setUser] = useState({})
    const [pet, setPet] = useState({})
    const [status, setStatus] = useState(adoption.status)

    const handleApproval = async () => {
        const { approveAdoption } = ApiService(token);
        await approveAdoption(adoption.pet_id, adoption.user_id)
        setStatus('APPROVED')
    }

    const handleRejection = async () => {
        const { rejectAdoption } = ApiService(token);
        await rejectAdoption(adoption.pet_id, adoption.user_id)
        setStatus('REJECTED')
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
        <tr>
            <td className="border border-slate-700">{user.name}</td>
            <td className="border border-slate-700">{pet.name}</td>
            <td className="border border-slate-700">{status}</td>
            <td className="border border-slate-700">
                <button className="text-cyan-500" onClick={handleApproval}>
                    <FaCheck />
                </button>
                <button className="text-cyan-500" onClick={handleRejection}>
                    <FaXmark />
                </button>
            </td>

        </tr>
    )

}

