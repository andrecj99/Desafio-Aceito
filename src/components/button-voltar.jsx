import { useContext } from "react";
import { RotasContext } from '../context/RotasContext';

function Voltar() {

    const { renderLayout, setRenderLayout } = useContext(RotasContext);

    function Voltar(){
        if (renderLayout === 'SelecaoPersonalizado') {
            setRenderLayout('ModoDeJogo')
        }
        if (renderLayout === 'CriacaoPersonalizado') {
            setRenderLayout('SelecaoPersonalizado')
        }
    }
    
    return (
        <>
            <button 
            onClick={Voltar}
            className="text-xl font-semibold p-2 bg-red-600 hover:bg-red-500 rounded-full w-40">
                Voltar
            </button>
        </>
    )
}

export default Voltar