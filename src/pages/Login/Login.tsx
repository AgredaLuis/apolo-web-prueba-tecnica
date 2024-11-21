import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";


const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-green-800 to-black">
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div className="text-center mt-4">
          {isLogin ? (
            <p className="text-sm text-gray-400">
              ¿No tienes cuenta?{" "}
              <button
                onClick={() => {
                  setIsLogin(false);
                }}
                className="text-green-500 hover:text-green-700 font-semibold"
              >
                Regístrate
              </button>
            </p>
          ) : (
            <p className="text-sm text-gray-400">
              ¿Ya tienes una cuenta?{" "}
              <button
                onClick={() => {
                  setIsLogin(true);
                }}
                className="text-green-500 hover:text-green-700 font-semibold"
              >
                Inicia sesión
              </button>
            </p>
          )}
        </div>
      </div>
  );
};

export default LoginPage;
