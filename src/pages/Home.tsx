import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CharactersCard from "../components/CharactersCard";
import { Character } from "../types/character";
import Title from "../components/Title";

interface Props {
  characters: Character[];
  setCharacters: (characters: Character[]) => void;
}

const Home = ({ characters }: Props) => {
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const navigate = useNavigate();

  // Filtrado de personajes
  useEffect(() => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [search, characters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-800 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Title title={"Bienvenido a Rick y Morty Explorer"} />

        {/* Barra de búsqueda */}
        <div className="flex justify-center mb-8 gap-5">
          <input
            type="text"
            placeholder="Busca un personaje por nombre..."
            className="w-1/2 p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => navigate("/edit-create")}
            className="ml-4 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Agregar Personaje
          </button>
        </div>

        {/* Renderizado de Personajes */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCharacters.map((character) => (
            <CharactersCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
