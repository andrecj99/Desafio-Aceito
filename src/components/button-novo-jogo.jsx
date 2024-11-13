import { useContext } from "react";
import { RotasContext } from '../context/RotasContext';


function NovoJogo() {
    
    const {setRenderLayout} = useContext(RotasContext)

    function CriarNovoJogo() {
        setRenderLayout('CriacaoPersonalizado')
    }

    return (
        <>
            <button 
            onClick={CriarNovoJogo}
            className="text-xl p-2 bg-red-600 hover:bg-red-500 rounded-full w-40">
                Novo Jogo
            </button>
        </>
    )
}

export default NovoJogo