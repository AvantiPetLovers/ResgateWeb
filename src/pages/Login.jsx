import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { login } from '../services/ApiService';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { sign } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      if (response.status !== 200) {
        setError(true);
        return;
      }
      sign(response.data)
      navigate("/");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <div >
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input
                type="password"
                placeholder="Digite sua password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <label>Email ou password incorretos</label>}
            <button type="submit" >Entrar</button>
          </form>
        </div>
        <span>
          Novo aqui?<a className='text-sky-950 font-bold' href="/register">Cadastre-se</a>
        </span>
      </div >
    </>
  )
}
