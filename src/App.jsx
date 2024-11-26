import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import UserForm from './pages/UserForm'
import AdoptionList from './pages/AdoptionList'
import PetDetail from './pages/PetDetail'
import PetList from './pages/PetList'
import PetForm from './pages/PetForm'
import Layout from './components/Layout'


export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adoption" element={<AdoptionList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/pet-detail" element={<PetDetail />} />
          <Route path="/new-pet" element={<PetForm />} />
          <Route path="/pet" element={<PetList />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}
