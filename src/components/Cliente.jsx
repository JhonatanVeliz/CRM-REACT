
function Cliente({ cliente }) {

  const { id, nombre, telefono, email, empresa } = cliente;

  return (
    <tr>
      <td className="p-6 font-bold">
        { nombre }
      </td>
    </tr>
  )
}

export default Cliente