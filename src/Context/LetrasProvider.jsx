import {useState, createContext} from 'react';
import axios from 'axios';

const LetrasContext = createContext();

const LetrasProvider = ({children}) => {
    
    const [letra, setLetra] = useState('')
    const [cargando, setCargando] = useState(false)
    const [noEncontrado, setNoEncontrado] = useState(false);

    const busquedaLetra =async busqueda => {
        try {
            setNoEncontrado(false)
            setCargando(true);
            const {artista, cancion} = busqueda;
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
            const {data} = await axios(url);
            setLetra(data.lyrics);
        } catch (error) {
            setLetra('')
            setNoEncontrado(true);
        }
        setCargando(false);
    };

    return (
        <LetrasContext.Provider
        value={{
            busquedaLetra,
            letra,
            cargando,
            noEncontrado
        }}
        >
            {children}
        </LetrasContext.Provider>
    );
};

export {LetrasProvider};
export default LetrasContext;