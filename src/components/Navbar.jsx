import { useNavigate } from "react-router-dom";
import resgateLogo from '../assets/logo.svg'


export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 z-50 w-full bg-cyan-100 shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex space-x-8 text-blue-800 font-bold">
                        <img src={resgateLogo} className="cursor-pointer" alt="Resgate Logo" onClick={() => navigate("/")} />

                        <a className="cursor-pointer py-2" onClick={() => navigate("/")} >
                            Home
                        </a>
                        <a className="cursor-pointer py-2" onClick={() => navigate("/pet")} >
                            Adotar
                        </a>
                        <a className="cursor-pointer py-2" onClick={() => navigate("/adoption")} >
                            Controle de adoção
                        </a>
                        <a className="cursor-pointer py-2" onClick={() => navigate("/new-pet")} >
                            Adicionar pet
                        </a>
                    </div>

                    
                    <button onClick={() => navigate("/login")}>
                        Entrar
                    </button>
                </div>
            </div>
        </nav>
    );
}


