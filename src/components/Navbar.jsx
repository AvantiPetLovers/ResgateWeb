import { useNavigate } from "react-router-dom";
import resgateLogo from '../assets/logo.svg';
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { ApiService } from "../services/ApiService";
import LoggedUserIcon from "./LoggedUserIcon";
import CustomButton from "./CustomButton";

export default function Navbar() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const { userId, access, token } = useContext(AuthContext);

    // Busca os dados do usuário logado
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
                        {access === 'ADMIN' && (
                            <a className="cursor-pointer py-2" onClick={() => navigate("/adoption")} >
                                Controle de adoção
                            </a>
                        )}
                        {access === 'ADMIN' && (
                            <a className="cursor-pointer py-2" onClick={() => navigate("/new-pet")} >
                                Adicionar pet
                            </a>
                        )}
                    </div>

                    {userId ? (
                        <LoggedUserIcon user={user} />
                    ) : (
                        <CustomButton
                            text="Entrar"
                            onClick={() => navigate("/login")}
                            color="blue"
                            variant="outlined"
                        />

                    )}
                </div>
            </div>
        </nav>
    );
}
