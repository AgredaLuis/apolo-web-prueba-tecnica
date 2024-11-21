import { useState } from "react";
import { isValidPassword, validateEmail } from "../../../utils/validations";
import { useNavigate } from "react-router-dom";
import Title from "../../../components/Title";

interface User {
  email: string;
  password: string;
}

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor, introduce un correo válido.");
      return;
    }

    if (!isValidPassword(password)) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }


    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const emailExists = storedUsers.some((user: User) => user.email === email);

    if (emailExists) {
      setError("Este correo ya está registrado.");
      return;
    }

    const newUser: User = { email, password };
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setError("")
    navigate("/");
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
  };

  return (
    <form
      onSubmit={handleRegister}
      className="bg-gray-800 p-8 rounded-lg shadow-lg w-96"
    >
      <Title title="Registro" />
      <input
        type="text"
        placeholder="Correo electrónico"
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button
        type="submit"
        className="w-full p-2 mb-4 rounded bg-green-500 hover:bg-green-700 text-white font-semibold"
      >
        Registrarse
      </button>
    </form>
  );
};

export default RegisterForm;
