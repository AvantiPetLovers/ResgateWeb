import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [userId, setUserId] = useState(localStorage.getItem("id"));
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [access, setAccess] = useState(localStorage.getItem("access"));

    const sign = (data) => {
        setUserId(data.userData.id);
        setToken(data.token);
        setAccess(data.userData.access);
        localStorage.setItem("id", data.userData.id);
        localStorage.setItem("token", data.token);
        localStorage.setItem("access", data.userData.access);
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