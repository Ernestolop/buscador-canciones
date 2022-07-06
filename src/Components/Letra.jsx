import useLetras from '../Hooks/useLetras'
import Spinner from '../Components/Spinner'

const Letra = () => {

    const {letra, cargando} = useLetras();

 if (cargando) return <Spinner/>
  return (
    <div className='letra'>{letra}</div>
  )
}

export default Letra