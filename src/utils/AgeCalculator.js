// Calcula a idade com base na data de nascimento
export const handleAge = (birth) => {
    const birthDate = new Date(birth);
    const today = new Date();
    const ageInYears = today.getFullYear() - birthDate.getFullYear();
    const ageInMonths = (today.getFullYear() - birthDate.getFullYear()) * 12 + today.getMonth() - birthDate.getMonth();
    const ageInDays = Math.round((today - birthDate) / (1000 * 60 * 60 * 24));

    if (ageInYears > 0) {
        return `${ageInYears} anos`;
    } else if (ageInMonths > 0) {
        return `${ageInMonths} meses`;
    } else {
        return `${ageInDays} dias`;
    }
}