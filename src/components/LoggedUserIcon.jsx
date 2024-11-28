import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { FaRightFromBracket } from "react-icons/fa6";

export default function LoggedUserIcon({ user }) {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    return (
        <div className="flex items-center space-x-4">
            <span className="font-bold text-blue-800">{user.name}</span>
            <img src={user.img} alt="Icone do usuario" className="w-10 h-10 object-cover rounded-full" />
            <button className="text-blue-800 hover:text-red-700"
                title="Sair"
                data-tip="Sair"
                onClick={() => {
                    logout()
                    navigate("/")
                }}>
                <FaRightFromBracket className="size-6" />
            </button>
        </div>
    );
}
