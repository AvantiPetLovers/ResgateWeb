import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

import Home from './pages/Home'
import Login from './pages/Login'
import UserForm from './pages/UserForm'
import AdoptionList from './pages/AdoptionList'
import PetDetail from './pages/PetDetail'
import PetList from './pages/PetList'
import PetForm from './pages/PetForm'
import Layout from './components/Layout'


const AuthLoggedUser = ({ component: Component }) => {
  const { userId } = useContext(AuthContext);
  return userId ? <Component /> : <Navigate to="/login" />
}

const AuthLoggedAdmin = ({ component: Component }) => {
  const { access } = useContext(AuthContext);
  return access == 'ADMIN' ? <Component /> : <Navigate to="/login" />
}


export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adoption" element={<AuthLoggedAdmin component={AdoptionList} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/new-pet" element={<AuthLoggedAdmin component={PetForm} />} />
          <Route path="/pet" element={<PetList />} />
          <Route path="/pet/:id" element={<PetDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}
