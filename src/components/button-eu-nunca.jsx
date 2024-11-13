import { useContext } from "react"
import { RotasContext } from '../context/RotasContext';

   
function ButtonEuNunca() {
    
    const { setRenderLayout, setPergunta, listaPerguntas } = useContext(RotasContext)

    function PageEuNunca() {
        setPergunta(listaPerguntas[Math.floor(Math.random() * listaPerguntas.length)])
        setRenderLayout('ModoEuNunca');
    }

    return (
        <>
            <button 
             onClick={PageEuNunca}
            className="
            transform transition duration-300 hover:scale-110
            px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-tl-3xl rounded-br-3xl">
                Eu nunca
            </button>
        </>
    )
}

export default ButtonEuNunca