import { useState } from "react";
import Title from "../../../components/Title";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = storedUsers.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );

    if (!userExists) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    // Inicio de sesión exitoso
    setError("");
    alert("Inicio de sesión exitoso.");
    localStorage.setItem("auth", "true"); // para futuras validaciones de rutas
    window.location.href = "/home"; 
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm mx-auto"
    >
      <Title title="Iniciar Sesion" />
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
        Ingresar
      </button>
    </form>
  );
};

export default LoginForm;
