import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ApiService } from "../services/ApiService";
import { useParams, useNavigate } from "react-router-dom";
import { translate } from '../utils/EnumTranslator';
import { handleAge } from "../utils/AgeCalculator";
import CustomButton from "../components/CustomButton";
import PetListLine from "../components/PetListLine";

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
        <>
    <div className="flex gap-8 m-12">
      <img src={pet.img} alt={pet.name} className="w-1/2 h-96 object-cover rounded-lg" />
      <div className="w-1/2 flex flex-col">
        <h2 className="text-3xl font-semibold text-sky-950">{pet.name}</h2>
        <p className="text-gray-600 mb-8">{translate(pet.species) && translate(pet.species).toUpperCase()}</p>
        {!userId &&
          <CustomButton text="Faça login para adotar" variant="filled" onClick={() => navigate("/login")} />
        }
        {(userId && !userAdoptionRequest) &&
          <CustomButton text="Adotar" variant="filled" onClick={handleAdoption} />
        }
        {userId && userAdoptionRequest && (
          <span
            className={`font-semibold py-2 px-4 rounded-full ${
              userAdoptionRequest.status === "APPROVED"
                ? "text-green-600 bg-green-100"
                : userAdoptionRequest.status === "REJECTED"
                ? "text-red-600 bg-red-100"
                : "text-gray-600 bg-gray-100"
            }`}
          >
            {"Status do pedido de adoção: " + translate(userAdoptionRequest.status)}
          </span>
        )}

        <table className="text-gray-600 mt-4">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="font-semibold p-4">Porte:</td>
              <td>{translate(pet.size)}</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="font-semibold p-4">Descrição:</td>
              <td>{pet.description}</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="font-semibold p-4">Idade:</td>
              <td>{handleAge(pet.birth_date)}</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="font-semibold p-4">Personalidade:</td>
              <td>{translate(pet.personality)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <PetListLine title="Outros pets para adotar" subTitle="Veja outros pets para adotar" />
    </>
  );
}
