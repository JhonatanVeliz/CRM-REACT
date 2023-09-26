import { useRouteError } from "react-router-dom"

const ErrorsPage = () => {

  const error = useRouteError();

  return (
    <div className="space-y-6">
      <h1 className="text-blue-900 font-extrabold text-5xl text-center">CRM - CLIENTES</h1>
      <p className="text-red-700 font-bold text-2xl text-center">Hubo un Error</p>
      <p className="font-bold text-2xl text-center">
        { error.statusText || error.message }
      </p>
    </div>
  )
}

export default ErrorsPage