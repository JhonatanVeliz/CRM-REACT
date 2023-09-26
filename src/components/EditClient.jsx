import { useNavigate, useLoaderData, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "./Formulario";
import { getClientUpdate, updateClient } from '../data/clientes';
import { Errors } from "./Errors";

export const loader = async ({ params }) => {
  const clienteEdit = await getClientUpdate(params.clienteId);
  if(!clienteEdit) throw new Error('Cliente No Encontrado');
  return clienteEdit
}

export const action = async ({ request, params }) => {

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

  await updateClient(params.clienteId, data);
  
  return redirect('/');
}

const EditClient = () => {

  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();

  return (
    <>
      <h2 className="text-4xl font-black text-blue-800 pb-2 title--clientes">Editar Cliente</h2>
      <p className="mt-3 text-xl font-bold text-slate-700">Agrega los datos a actualizar</p>

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

        <Form method="PUT" noValidate>

          <Formulario cliente={cliente} />
          <input type="submit"
            className="bg-blue-800 font-bold uppercase text-white w-full p-2 rounded cursor-pointer"
            value='Guardar Cliente'
          />

        </Form>

      </div>

    </>
  )
}

export default EditClient