import { useNavigate } from "react-router-dom";
import resgateLogo from '../assets/logo.svg'

import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { ApiService } from "../services/ApiService";

export default function Navbar() {
    const [user, setUser] = useState({})
    const navigate = useNavigate();
    const { userId, logout, token } = useContext(AuthContext);

    // Busca os pets no banco de dados
    useEffect(() => {
        if (userId) {
            const { findUserById } = ApiService(token);

            const getLoggedUser = async () => {
                const { data } = await findUserById(userId);
                setUser(data);
            };
            getLoggedUser();
        }
    }, [userId, token]);


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
                        <a className="cursor-pointer py-2" onClick={() => { logout(); navigate("/") }} >
                            Logout
                        </a>
                    </div>

                    {userId ? (
                        <div className="flex items-center space-x-8">
                            <span className="font-bold text-blue-800">{user.name}</span>
                            <img src={user.img} alt="User" className="w-16 h-16 object-cover rounded-full" />
                        </div>
                    ) : (
                        <button onClick={() => navigate("/login")}>
                            Entrar
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}


