import { useLoaderData } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import Cliente from "../components/Cliente";

export const loader = () => {

  const clientes = [
    {
      id: 1,
      nombre: 'Juan',
      telefono: 102013313,
      email: "juan@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 2,
      nombre: 'Karen',
      telefono: 138198313,
      email: "karen@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 3,
      nombre: 'Josue',
      telefono: 31983913,
      email: "josue@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 4,
      nombre: 'Miguel',
      telefono: 319381983,
      email: "miguel@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 5,
      nombre: 'Pedro',
      telefono: 1398198938,
      email: "pedro@juan.com",
      empresa: 'Codigo Con Juan'
    },
  ];

  return clientes;

}

const Index = () => {

  function get() {

    const { data, loading, errors } = useFetch('http://localhost:5173/db.json');
    console.log(data);
  }

  get();

  const data = useLoaderData();

  return (
    <>
      <h1 className="text-4xl font-black text-blue-800 pb-2 title--clientes">Clientes</h1>
      <p className="mt-3 text-xl font-bold">Administra tus clientes</p>

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