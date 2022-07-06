import {useContext} from 'react'
import LetrasContext from '../Context/LetrasProvider'

const useLetras = () => {
  return useContext(LetrasContext);
}

export default useLetras