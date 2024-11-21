import { useNavigate } from "react-router-dom";

interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
  }

const CharactersCard = ({ character }: { character: Character }) => {
  const navigate = useNavigate(); 
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-green-400">{character.name}</h2>
      <p className="text-sm text-gray-400">{character.species}</p>
      <p
        className={`text-sm ${
          character.status === "Alive"
            ? "text-green-500"
            : character.status === "Dead"
            ? "text-red-500"
            : "text-gray-500"
        }`}
      >
        {character.status}
      </p>
      <button
        onClick={() => navigate(`/edit-create/${character.id}`)}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
      >
        Editar
      </button>
    </div>
  );
};


export default CharactersCard