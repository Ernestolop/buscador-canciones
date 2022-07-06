import {useState} from 'react'
import Error from './Error'
import useLetras from '../Hooks/useLetras'

const Formulario = () => {

    const {busquedaLetra} = useLetras();
 
    const [busqueda, setBusqueda] = useState({
        artista : '',
        cancion : ''
    })
    const [error, setError] = useState(false);

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (Object.values(busqueda).includes('')) {
            setError(true);
            return;
        }
        setError(false);
        busquedaLetra(busqueda);
    };

  return (
    <form
    onSubmit={handleSubmit}
    >
        <legend>Busca por Artista y Canción</legend>
        <div className="form-grid">
            <div>
                <label htmlFor="artista">Artista</label>
                <input type="text" 
                name='artista'
                id='artista'
                placeholder='Nombre Artista'
                onChange={e => handleChange(e)}
                value={busqueda.artista}
                />
            </div>
            <div>
                <label htmlFor="cancion">Canción</label>
                <input type="text" 
                name='cancion'
                id='cancion'
                placeholder='Nombre Canción'
                onChange={e => handleChange(e)}
                value={busqueda.cancion}
                />
            </div>
            <input type="submit" value="Buscar" />
        </div>
        {error && <Error>Todos los campos son obligatorios</Error>}
    </form>
  )
}

export default Formulario