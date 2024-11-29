import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CustomButton from '../components/CustomButton';
import { ApiService } from '../services/ApiService';
import { AuthContext } from '../contexts/AuthContext';

export default function UserForm() {
  const navigate = useNavigate();
  const { token, sign } = useContext(AuthContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const { addUser } = ApiService(token);
      const response = await addUser(data);
      sign(response.data)
      navigate("/");
    } catch (error) {
      console.error('Erro ao cadastrar usuario:', error);
    }
  };

  const password = watch('password');

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4 text-sky-950">Cadastro de usuario</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md">
        <label className="flex flex-col">
          Nome:
          <input {...register('name', { required: true })} type="text" className="border p-2 rounded-md" />
          {errors.name && <span className="text-red-500">Nome é obrigatório</span>}
        </label>
        <label className="flex flex-col">
          Imagem:
          <input {...register('img', { required: true })} type="text" className="border p-2 rounded-md" />
          {errors.img && <span className="text-red-500">Imagem é obrigatória</span>}
        </label>
        <label className="flex flex-col">
          Email:
          <input {...register('email', { required: true })} type="email" className="border p-2 rounded-md" />
          {errors.email && <span className="text-red-500">Email é obrigatório</span>}
        </label>
        <label className="flex flex-col">
          Senha:
          <input {...register('password', { required: true })} type="password" className="border p-2 rounded-md" />
          {errors.password && <span className="text-red-500">Senha é obrigatória</span>}
        </label>
        <label className="flex flex-col">
          Confirmar Senha:
          <input {...register('confirmPassword', { required: true, validate: value => value === password || 'As senhas não coincidem' })} type="password" className="border p-2 rounded-md" />
          {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
        </label>
        <label className="flex flex-col">
          Telefone:
          <input {...register('phone')} type="text" className="border p-2 rounded-md" />
        </label>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <label className="flex flex-col w-4/5">
              Rua:
              <input {...register('street')} type="text" className="border p-2 rounded-md" />
            </label>
            <label className="flex flex-col w-1/5">
              Número:
              <input {...register('number')} type="text" className="border p-2 rounded-md" />
            </label>
          </div>
          <div className="flex gap-2">
            <label className="flex flex-col">
              Bairro:
              <input {...register('neighborhood')} type="text" className="border p-2 rounded-md" />
            </label>
            <label className="flex flex-col">
              Cidade:
              <input {...register('city')} type="text" className="border p-2 rounded-md" />
            </label>
          </div>
        </div>
        <CustomButton type="submit" text="Cadastrar" />
      </form>
    </div>
  );
}


