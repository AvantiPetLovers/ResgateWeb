import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CustomButton from '../components/CustomButton';
import { ApiService } from '../services/ApiService';
import { AuthContext } from '../contexts/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { token, sign } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const { login } = ApiService(token);
      const response = await login(data);
      sign(response.data);
      navigate("/");
    } catch (error) {
      setLoginError('Email ou senha incorretos.');
      console.error('Erro ao logar:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4 text-sky-950">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-md">
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
        {loginError && <div className="text-red-500 mb-4">{loginError}</div>}
        <CustomButton type="submit" text="Entrar" />
      </form>
      <div className="mt-4">
        <span>Não tem uma conta? </span>
        <button className="text-blue-500 hover:underline" onClick={() => navigate("/register")}>
          Registre-se
        </button>
      </div>
    </div>
  );
}

