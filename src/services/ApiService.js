import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json"
    }
});


// Login
export const login = async (user) => api.post("/login", user);

// Pet
export const findPets = async () => api.get("/pet");
export const findPetById = async (id) => api.get(`/pet/${id}`);
export const addPet = async (pet) => api.post("/pet", pet);
export const updatePet = async (id, pet) => api.put(`/pet/${id}`, pet);
export const deletePet = async (id) => api.delete(`/pet/${id}`);

// Adotantes
export const findUsers = async () => api.get("/user");
export const findUserById = async (id) => api.get(`/user/${id}`);
export const addUser = async (user) => api.post("/user", user);
export const updateUser = async (id, user) => api.put(`/user/${id}`, user);
export const deleteUser = async (id) => api.delete(`/user/${id}`);

// Adocoes
export const findAdoptions = async () => api.get("/adoption");
export const findAdoptionById = async (id) => api.get(`/adoption/${id}`);
export const addAdoption = async (adoption) => api.post("/adoption", adoption);