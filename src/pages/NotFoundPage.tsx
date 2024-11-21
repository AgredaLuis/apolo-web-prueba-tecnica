import rickAndMortyNeon from '../assets/images/rickandmorty-neon.jpg';
import { Link } from "react-router-dom";
import Title from '../components/Title';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen  bg-gray-900 text-white flex flex-col items-center justify-center">
          <img
            src={rickAndMortyNeon}
            alt="Rick and Morty"
            className="w-1/2 max-w-sm mb-8"
          />
          <Title title={"Has ido al universo incorrecto"}/>

          <Link
            to="/home"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Volver al inicio
          </Link>
        </div>
      );
    };
export default NotFoundPage