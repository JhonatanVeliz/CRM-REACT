const getClients = async () => {
  const url = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if(!response.ok) throw new Error('Error', response.status)

    return data
  } 
  catch (error) {console.log(error)}
};

const postClients = async ( data ) => {
  const url = import.meta.env.VITE_API_URL;

  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{'Content-Type': 'application/json'}
    }
    const respuesta = await fetch( url, options);
    await respuesta.json();
  } 
  catch (error) { console.log(error) }

}
export {
  getClients,
  postClients
}