import React from 'react'
import Formulario from './Formulario'
import Error from '../Components/Error'
import useLetras from '../Hooks/useLetras'
import Letra from './Letra';

const AppLetras = () => {

  const {letra, cargando, noEncontrado} = useLetras();

  return (
    <>
    <header>Búsqueda de letras de canciones</header>
    <Formulario/>
    <main className='main'>
      {noEncontrado && <Error>Hubo un error. Favor verifique si ha escrito correctamente y compruebe su conexion</Error>}
      {(cargando || letra) && <Letra/>}
    </main>
    </>
  )
}

export default AppLetras