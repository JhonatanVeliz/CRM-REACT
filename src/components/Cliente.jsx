import { useNavigate } from "react-router-dom";

function Cliente({ cliente }) {

  const navigate = useNavigate();

  const { id, nombre, telefono, email, empresa } = cliente;

  return (
    <tr>

      <td className="p-6 space-y-2">
        <p className="font-bold">{ nombre }</p>
        <p>{ empresa }</p>
      </td>

      <td className="p-6 space-y-2">
        <p><span className="font-bold">Email: </span>{ email }</p>
        <p><span className="font-bold">Tel: </span>{ telefono }</p>
      </td>

      <td className="p-6 font-bold flex gap-3 justify-center">
        <button
          type="button" 
          className="text-sm uppercase text-blue-500 hover:text-blue-700"
          onClick={()=> navigate(`/clientes/${id}/editar`)}
        >
          editar
        </button>
        <button type="button" className="text-sm uppercase text-red-500 hover:text-red-700">
          eliminar
        </button>
      </td>
      
    </tr>
  )
}

export default Cliente