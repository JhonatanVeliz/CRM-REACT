import { useEffect, useState } from "react";

export const useFetch = async (url) => {

  const initialState = {data : null, loading: true,errors : false};

  const [state, setState] = useState(initialState);

  // const getFetch = async () => {

  //   if(!url) return;

  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  
  //     if(!response.ok){
  //       console.log('no funciono', response.status);
  //       return
  //     }
  
  //     setState({ data: data, loading: false, errors: false });
      
  //   } catch (error) {
  //     setState({ data: null, loading: false, errors: error });
  //   }
  // }

  const getFetch = async () => {

    if (!url) return;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error('Error en la solicitud:', response.status);
        return;
      }
  
      const data = await response.json();
      setState({ data: data, loading: false, errors: false });

    } catch (error) {
      console.error('Error en la solicitud:', error);
      setState({ data: null, loading: false, errors: error });
    }
  }  

  useEffect(()=>{
    getFetch();
  }, [ url ]);

  return {
    data: state.data,
    loading: state.loading,
    errors: state.errors
  }

};

