import { useNavigate } from "react-router-dom";
import { translate } from "../utils/EnumTranslator";
import { handleAge } from "../utils/AgeCalculator";

export default function PetCard({ pet }) {
    const navigate = useNavigate();

    return (
        <div className="m-2 gap-2 bg-cyan-50 border-2 border-gray-300 rounded-lg p-4 w-68 h-88 hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => navigate(`/pet/${pet.id}`)}
        >
            <img src={pet.img} alt={pet.name} className="size-60 object-cover rounded-lg" />
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-sky-950">{pet.name}</h2>
                <p className=" text-gray-600 font-semibold">{translate(pet.species)}</p>
            </div>
            <div className="flex items-center">
                <span className="text-gray-600 font-normal pr-2">Idade:</span >
                <span className="text-gray-600 font-semibold">{handleAge(pet.birth_date)}</span>
                <span className="text-gray-600 font-normal px-2">•</span>
                <span className="text-gray-600 font-normal pr-2">Tamanho:</span >
                <span className="text-gray-600 font-semibold">{translate(pet.size).slice(0,1)}</span>
            </div>
            <span className="bg-blue-800 px-2 py-1 rounded-full text-white font-semibold text-sm truncate">{translate(pet.personality)}</span>
        </div>

    )
}
