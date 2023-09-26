import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import { Errors } from "../components/Errors";
import { postClients } from "../data/clientes";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const email = formData.get('email');
  const errors = [];
  const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if (!email.match(regex)) {
    errors.push('email no válido');
  }

  if (Object.values(data).includes('')) {
    errors.push('todos los campos son obligatorios');
  }

  if (errors.length > 0) {
    return errors
  }

  await postClients(data);

  return redirect('/');
}

const NuevoCliente = () => {

  const navigate = useNavigate();
  const errores = useActionData();

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

        {
          errores?.length && errores.map((err, i) => <Errors key={i}> {err} </Errors>)
        }

        <Form method="POST" noValidate>

          <Formulario />
          <input type="submit"
            className="bg-blue-800 font-bold uppercase text-white w-full p-2 rounded cursor-pointer"
            value='registrar cliente'
          />

        </Form>

      </div>

    </>
  )
}

export default NuevoCliente