import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const ApiService = (token) => {
    api.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });

    return {
        login: (user) => api.post('/login', user),
        findPets: () => api.get('/pet?status=AVAILABLE'),
        findPetById: (id) => api.get(`/pet/${id}`),
        addPet: (pet) => api.post('/pet', pet),
        updatePet: (id, pet) => api.put(`/pet/${id}`, pet),
        deletePet: (id) => api.delete(`/pet/${id}`),
        findUsers: () => api.get('/user'),
        findUserById: (id) => api.get(`/user/${id}`),
        addUser: (user) => api.post('/user', user),
        updateUser: (id, user) => api.put(`/user/${id}`, user),
        deleteUser: (id) => api.delete(`/user/${id}`),
        findAdoptions: () => api.get('/adoption'),
        findAdoptionByUser: (user_id) => api.get(`/adoption/${user_id}`),
        addAdoption: (adoption) => api.post('/adoption', adoption),
        approveAdoption: (pet_id, user_id) => api.put(`/adoption/${pet_id}/${user_id}/approve`),
        rejectAdoption: (pet_id, user_id) => api.put(`/adoption/${pet_id}/${user_id}/reject`),
    };
};
