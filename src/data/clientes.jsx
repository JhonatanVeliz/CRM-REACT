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

const getClientUpdate = async (id) => {

  const url = `${import.meta.env.VITE_API_URL}/${id}`;

  try {
    const respuesta = await fetch(url);
    if(!respuesta.ok) throw new Error('Error', respuesta.status);
    const client    = await respuesta.json();
    return client;
  } 
  catch (error) { console.log(error) }
}

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

const updateClient = async (id, data) => {

  const url = `${import.meta.env.VITE_API_URL}/${id}`;

  try {

    const options = {
      method: 'PUT',
      body : JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const respuesta = await fetch(url, options);
    await respuesta.json();
  } catch (error) { console.log(error) }
}

const deleteClient = async (id) => {
  const url = `${import.meta.env.VITE_API_URL}/${id}`;

  try {

    const options = {
      method: 'DELETE'
    }

    const respuesta = await fetch(url, options);
    await respuesta.json() ;
  }
  catch (error) { console.log(error) }
}

export {
  getClients,
  postClients,
  getClientUpdate,
  updateClient,
  deleteClient
}