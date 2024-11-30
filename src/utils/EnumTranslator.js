const translations = {
    "DOG": "Cão",
    "CAT": "Gato",
    "RABBIT": "Coelho",
    "FISH": "Peixe",
    "BIRD": "Pássaro",
    "TURTLE": "Tartaruga",
    "SNAKE": "Cobra",
    "OTHER": "Outro",
    "AVAILABLE": "Disponível",
    "ADOPTED": "Adotado",
    "SMALL": "Pequeno",
    "MEDIUM": "Médio",
    "LARGE": "Grande",
    "CALM": "Calmo",
    "AGGRESSIVE": "Agressivo",
    "PLAYFUL": "Brincalhão",
    "INDEPENDENT": "Independente",
    "DEPENDENT": "Dependente",
    "LOYAL": "Leal",
    "CURIOUS": "Curioso",
    "LOVING": "Amoroso",
    "ADMIN": "Administrador",
    "ADOPTER": "Adotante",
    "APPROVED": "Aprovado",
    "REJECTED": "Rejeitado",
    "PENDING": "Pendente"
};

export const translate = (key) =>  translations[key] || key; 

