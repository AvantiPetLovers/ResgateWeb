export default function PetCard({pet}) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-72 h-96">
            <h2 className="text-lg font-semibold">{pet.name}</h2>
            <p className="text-gray-600">{pet.species}</p>
        </div>
    )
}