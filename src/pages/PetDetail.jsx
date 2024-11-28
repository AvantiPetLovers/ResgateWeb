import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ApiService } from "../services/ApiService";
import { useParams, useNavigate } from "react-router-dom";
import { translate } from '../utils/EnumTranslator';
import { handleAge } from "../utils/AgeCalculator";
import CustomButton from "../components/CustomButton";

export default function PetDetail() {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const { token, userId } = useContext(AuthContext);
  const [userAdoptionRequest, setUserAdoptionRequest] = useState(null);
  const navigate = useNavigate();

  // Busca os pets no banco de dados
  useEffect(() => {
    const { findPetById } = ApiService(token);
    const getPet = async () => {
      try {
        const { data } = await findPetById(id);
        setPet(data);
      } catch (error) {
        console.error("Erro ao buscar o pet:", error);
      }
    };
    if (token && id) {
      getPet();
    }
  }, [token, id]);

  // Busca os pedidos de adocoes do usuario no banco de dados
  useEffect(() => {
    const { findAdoptionByUser } = ApiService(token);
    const getAdoption = async () => {
      try {
        const { data } = await findAdoptionByUser(userId);
        const filteredData = data.filter((adoption) => adoption.pet_id === id);
        setUserAdoptionRequest(filteredData[0] || null);
      } catch (error) {
        console.error("Erro ao buscar adoções:", error);
      }
    };
    if (token && userId) {
      getAdoption();
    }
  }, [userId, token, id]);

  // Cria uma solicitação de adocao do pet
  const handleAdoption = async () => {
    const { addAdoption } = ApiService(token);
    const adoption = { pet_id: pet.id, user_id: userId };
    const response = await addAdoption(adoption);
    if (response.status === 200) {
      setUserAdoptionRequest(response.data);
    }
  };

  return (
    <div className="flex gap-8 my-8">
      <img src={pet.img} alt={pet.name} className="w-1/2 h-96 object-cover" />
      <div>
        <h2 className="text-lg font-semibold">{pet.name}</h2>
        {!userId &&
          <CustomButton text="Faça login para adotar" variant="filled" onClick={() => navigate("/login")} />
        }
        {(userId && !userAdoptionRequest) &&
          <CustomButton text="Adotar" variant="filled" onClick={handleAdoption} />
        }
        {userId && userAdoptionRequest && (
          <span
            className={`font-bold p-2 rounded-full ${userAdoptionRequest.status === "APROVED" ? "text-green-600 bg-green-100" : userAdoptionRequest.status === "REJECTED" ? "text-red-600 bg-red-100" : "text-gray-600 bg-gray-100"}`}
          >
            {translate(userAdoptionRequest.status)}
          </span>
        )}
        <p className="text-gray-600"><span className="font-semibold">Espécie: </span>{translate(pet.species)}</p>
        <p className="text-gray-600"><span className="font-semibold">Porte: </span>{translate(pet.size)}</p>
        <p className="text-gray-600"><span className="font-semibold">Descrição: </span>{pet.description}</p>
        <p className="text-gray-600"><span className="font-semibold">Idade: </span>{handleAge(pet.birth_date)}</p>
        <p className="text-gray-600"><span className="font-semibold">Personalidade: </span>{translate(pet.personality)}</p>
      </div>
    </div>
  );
}
