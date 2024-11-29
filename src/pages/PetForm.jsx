import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CustomButton from '../components/CustomButton';
import { ApiService } from '../services/ApiService';
import { AuthContext } from '../contexts/AuthContext';

export default function PetForm() {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const pet = {
      ...data,
      birth_date: new Date(data.birth_date).toISOString(),
    };

    try {
      const { addPet } = ApiService(token);
      const response = await addPet(pet);
      navigate(`/pet/${response.data.id}`);
    } catch (error) {
      console.error('Erro ao cadastrar pet:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4 text-sky-950">Cadastro de pet</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md">
        <label className="flex flex-col">
          Nome:
          <input {...register('name', { required: true })} type="text" className="border p-2 rounded-md" />
          {errors.name && <span className="text-red-500">Nome é obrigatório</span>}
        </label>
        <label className="flex flex-col">
          Imagem:
          <input {...register('img', { required: true })} type="text" placeholder='https://...' className="border p-2 rounded-md" />
          {errors.img && <span className="text-red-500">Imagem é obrigatória</span>}
        </label>
        <label className="flex flex-col">
          Espécie:
          <select {...register('species')} className="border p-2 rounded-md">
            <option value="DOG">Cão</option>
            <option value="CAT">Gato</option>
            <option value="RABBIT">Coelho</option>
            <option value="FISH">Peixe</option>
            <option value="BIRD">Pássaro</option>
            <option value="TURTLE">Tartaruga</option>
            <option value="SNAKE">Cobra</option>
            <option value="OTHER">Outro</option>
          </select>
        </label>
        <label className="flex flex-col">
          Personalidade:
          <select {...register('personality')} className="border p-2 rounded-md">
            <option value="CALM">Calmo</option>
            <option value="AGGRESSIVE">Agressivo</option>
            <option value="PLAYFUL">Brincalhão</option>
            <option value="INDEPENDENT">Independente</option>
            <option value="DEPENDENT">Dependente</option>
            <option value="LOYAL">Leal</option>
            <option value="CURIOUS">Curioso</option>
            <option value="LOVING">Amoroso</option>
          </select>
        </label>
        <fieldset className="flex flex-row gap-4">
          <legend className="mb-2">Tamanho:</legend>
          <label className="flex items-center">
            <input {...register('size')} type="radio" value="SMALL" className="mr-2" />
            Pequeno
          </label>
          <label className="flex items-center">
            <input {...register('size')} type="radio" value="MEDIUM" defaultChecked className="mr-2" />
            Médio
          </label>
          <label className="flex items-center">
            <input {...register('size')} type="radio" value="LARGE" className="mr-2" />
            Grande
          </label>
        </fieldset>
        <label className="flex flex-col">
          Data de nascimento:
          <input {...register('birth_date', { required: true })} type="date" className="border p-2 rounded-md" />
          {errors.birth_date && <span className="text-red-500">Data de nascimento é obrigatória</span>}
        </label>
        <label className="flex flex-col">
          Descrição:
          <textarea {...register('description')} className="border p-2 rounded-md" />
        </label>


        <CustomButton type="submit" text="Cadastrar" />
      </form>
    </div>
  );
}

