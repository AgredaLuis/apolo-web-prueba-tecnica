import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Character } from "../types/character";
import Title from "../components/Title";

interface Props {
  characters: Character[];
  setCharacters: (characters: Character[]) => void;
}

const EditCreate = ({ characters, setCharacters }: Props) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState<Character>({
    id: Date.now(), // Valor predeterminado para creación
    name: "",
    species: "",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
  });

  // Cargar datos del personaje si estamos en modo edición
  useEffect(() => {
    if (isEditing) {
      const character = characters.find((char) => char.id === parseInt(id!, 10));
      if (character) {
        setFormData(character);
      } else {
        alert("Personaje no encontrado");
        navigate("/home");
      }
    }
  }, [id, isEditing, characters, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar formulario para agregarlo a la lista de personajes
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let updatedCharacters: Character[];

    if (isEditing) {
      updatedCharacters = characters.map((char) =>
        char.id === formData.id ? formData : char
      );
    } else {
      updatedCharacters = [...characters, formData];
    }

    setCharacters(updatedCharacters); 
    navigate("/home"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-800 to-black text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <Title title={isEditing ? "Editar Personaje" : "Crear Personaje"} />
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Nombre:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="species" className="block text-sm font-medium">
            Especie:
          </label>
          <input
            id="species"
            name="species"
            type="text"
            value={formData.species}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium">
            Estado:
          </label>
          <input
            id="status"
            name="status"
            type="text"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium">
            URL de la Imagen:
          </label>
          <input
            id="image"
            name="image"
            type="url"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
        >
          {isEditing ? "Guardar Cambios" : "Crear Personaje"}
        </button>
      </form>
    </div>
  );
};

export default EditCreate;
