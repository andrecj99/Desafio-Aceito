import { useContext } from 'react';
import { RotasContext } from '../context/RotasContext';

function ButtonDesafios() {
    
    const { setRenderLayout, setDesafio, listaDesafios } = useContext(RotasContext) 

    function PageDesafios() {
        setRenderLayout('ModoDesafios')
        setDesafio(listaDesafios[ Math.floor( Math.random() * listaDesafios.length ) ])
    }

    return (
        <>
            <button 
            onClick={PageDesafios}
            className="
            transform transition duration-300 hover:scale-110
            px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-tl-3xl rounded-br-3xl">
                Desafios
            </button>
        </>
    )
}

export default ButtonDesafios