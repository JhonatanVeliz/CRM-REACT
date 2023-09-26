import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Index, { loader as clientesLoader } from './pages/Index';
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente';
import EditClient, {loader as clienteEditarLoader, action as clienteEditarAction} from './components/EditClient';
import ErrorsPage from './components/ErrorsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorsPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement:  <ErrorsPage />
      },
      {
        path: '/clientes/:clienteId/editar',
        loader: clienteEditarLoader,
        action: clienteEditarAction,
        element: <EditClient />,
        errorElement:  <ErrorsPage />
      }
    ]
  }
])

import './css/app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)