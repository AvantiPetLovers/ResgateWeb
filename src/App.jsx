import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdoptionList from './pages/AdoptionList'
import Login from './pages/Login'
import PetDetail from './pages/PetDetail'
import PetList from './pages/PetList'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adoption" element={<AdoptionList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pet-detail" element={<PetDetail />} />
        <Route path="/pet" element={<PetList />} />
      </Routes>
    </BrowserRouter>

  )
}
