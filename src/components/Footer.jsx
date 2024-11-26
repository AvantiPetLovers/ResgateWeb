import { useNavigate } from "react-router-dom";
import resgateLogo from '../assets/logo.svg'


export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="w-full h-16 bg-cyan-100 flex items-center justify-center">
            <div className="container flex items-center justify-between">
                <p>© 2024 Resgate. Todos os direitos reservados.</p>
                <img src={resgateLogo} className="cursor-pointer" alt="Resgate Logo" onClick={() => navigate("/")} />
            </div>
        </footer>
    );
}


