import { useLoaderData } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import Cliente from "../components/Cliente";
import { getClients } from "../data/clientes";

export const loader = () => {

  const clientes = getClients();
  return clientes;
}

const Index = () => {

  const data = useLoaderData();

  return (
    <>
      <h1 className="text-4xl font-black text-blue-800 pb-2 title--clientes">Clientes</h1>
      <p className="mt-3 text-xl font-bold text-slate-700">Administra tus clientes</p>

      {
        data.length >= 1 ?

          <table className="w-full bg-white mt-5 shadow">

            <thead className="bg-blue-600">
              <tr>
                <th className="text-white p-2">Clientes</th>
                <th className="text-white p-2">Contacto</th>
                <th className="text-white p-2">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {
                data.map(cliente => (
                  <Cliente key={cliente.id} cliente={cliente} />
                ))
              }
            </tbody>

          </table>
          : <p className="mt-5 font-black text-3xl text-red-600">No hay clientes</p>
      }
    </>
  )
}

export default Index