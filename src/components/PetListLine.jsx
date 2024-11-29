import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ApiService } from '../services/ApiService';
import { AuthContext } from '../contexts/AuthContext';
import PetCard from '../components/PetCard';
import CustomButton from '../components/CustomButton';
import { FaChevronRight } from 'react-icons/fa6';


export default function PetListLine({ title, subTitle }) {
    const navigate = useNavigate();
    const [pets, setPets] = useState([])
    const { token } = useContext(AuthContext);

    // Busca os pets no banco de dados
    useEffect(() => {
        const { findPets } = ApiService(token);
        const listPets = async () => {
            const { data } = await findPets();
            setPets(data.slice(0, 4));
        };
        listPets();
    }, [token]);

    return (
        <div className="m-12 ">
            <div className="flex justify-between mb-8">
                <div>
                    <h1 className="font-bold text-xs ">{title}</h1>
                    <span className="font-bold text-2xl text-sky-950">{subTitle}</span>
                </div>
                <CustomButton
                    text={<span className='flex items-center gap-2'>Ver mais<FaChevronRight /> </span>}
                    onClick={() => navigate("/pet")}
                    color="sky"
                    variant="outlined"
                />
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
                {pets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </div>
        </div>
    )
}