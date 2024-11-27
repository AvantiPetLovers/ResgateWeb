import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function LoggedUserIcon({ user }) {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const handleMenu = (e) => {
        e.stopPropagation();
        setOpen(!open);
    };

    // Fecha o dropdown ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button className="flex items-center space-x-8 cursor-pointer" onClick={handleMenu}>
                <span className="font-bold text-blue-800">{user.name}</span>
                <svg className="w-2.5 h-2.5 ms-3" fill="none" viewBox="0 0 10 6" >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
                <img src={user.img} alt="Icone do usuario" className="w-10 h-10 object-cover rounded-full" />
            </button>
            {open && (
                <div ref={menuRef} className="bg-white shadow-md p-2">
                    <button className="w-full py-2"
                        onClick={() => {
                            logout()
                            navigate("/")
                        }}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
