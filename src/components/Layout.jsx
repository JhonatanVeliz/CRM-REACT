import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {

  const location = useLocation();

  return (
    <div className='md:flex md:min-h-screen'>

      <aside className="md:w-1/4 bg-blue-800 px-5 py-10">
        <h2 className='text-4xl font-black text-center text-white'>CRM - REACT</h2>

        <nav className="pt-5">
          <Link className={`${location.pathname == '/' ? 'font-bold text-teal-500' : null} 
            text-3xl block text-white hover:text-blue-200 mt-3`} 
          to='/'>
            Inicio
          </Link>

          <Link className={`${location.pathname == '/clientes/nuevo' ? 'font-bold text-teal-500' : null} 
            text-3xl block text-white hover:text-blue-200 mt-3`} 
          to='/clientes/nuevo'>
            Nuevo Cliente
          </Link>
        </nav>

      </aside>


      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>

    </div>
  )
}

export default Layout