import { useLoaderData } from "react-router-dom";

export const loader = () => {

  return ['data'];
}

const Index = () => {

  const data = useLoaderData();

  console.log(data);

  return (
    <>
      <h1 className="text-4xl font-black text-blue-800 pb-2 title--clientes">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
    </>
  )
}

export default Index