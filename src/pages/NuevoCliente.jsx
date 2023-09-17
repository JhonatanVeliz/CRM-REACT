import { Form, useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {

  const navigate = useNavigate();

  return (
    <>
      <h2 className="text-4xl font-black text-blue-800 pb-2 title--clientes">Nuevo Cliente</h2>
      <p className="mt-3 text-xl font-bold text-slate-700">Llena todos los campos</p>

      <div className='flex justify-end'>
        <button className='bg-blue-900 text-white py-2 px-6 font-bold rounded'
        onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded md:w-3/4 p-6">
        <Formulario />
        <input type="submit" 
        className="bg-blue-800 font-bold uppercase text-white w-full p-2 rounded cursor-pointer"
        value='registrar cliente'
        />
      </div>

    </>
  )
}

export default NuevoCliente