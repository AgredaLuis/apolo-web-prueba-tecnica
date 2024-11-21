import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./components/RoutesWithNotFound/RoutesWithNotFound";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import EditCreate from "./pages/EditCreate";
import { Character } from "./types/character";
import { useEffect, useState } from "react";
import { getCharacters } from "./services/api";

function App() {

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const fetchedCharacters = await getCharacters();
      setCharacters(fetchedCharacters); // Actualiza los personajes en el estado global
    };

    fetchCharacters();
  }, []);
  return (
    <>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home characters={characters} setCharacters={setCharacters} />} />
          <Route path="/edit-create/:id?" element={<EditCreate characters={characters} setCharacters={setCharacters} />} />
        </RoutesWithNotFound>
      </BrowserRouter>
    </>
  );
}

export default App;
