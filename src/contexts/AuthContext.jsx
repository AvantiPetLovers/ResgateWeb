import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [userId, setUserId] = useState(localStorage.getItem("id"));
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [access, setAccess] = useState(localStorage.getItem("access"));

    const sign = (data) => {
        setUserId(data.data.id);
        setToken(data.token);
        setAccess(data.data.access);
        localStorage.setItem("id", data.data.id);
        localStorage.setItem("token", data.token);
        localStorage.setItem("access", data.data.access);
    }

    const logout = () => {
        setUserId(null);
        setToken(null);
        setAccess(null);
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        localStorage.removeItem("access");
    }

    return (
        <AuthContext.Provider value={{ userId, token, access, sign, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;