import { useContext } from "react";
import { RotasContext } from '../context/RotasContext';

function IconVoltar() {

    const { renderLayout, setRenderLayout } = useContext(RotasContext);

    function Voltar(){
        if (renderLayout === 'ModoEuNunca') {
            setRenderLayout('ModoDeJogo')
        }

        if (renderLayout === 'ModoDesafios') {
            setRenderLayout('ModoDeJogo')
        }

        if (renderLayout === 'ModoPersonalizado') {
            setRenderLayout('SelecaoPersonalizado')
        }
        if (renderLayout === 'CriacaoPersonalizado') {
            setRenderLayout('SelecaoPersonalizado')
        }
    }
    
    
    return (
        <>
            <button 
            onClick={Voltar}
            className="mt-4">
               
                <img 
                src="../imagens/button-voltar.png"
                style={{width:'45px', height:'45px'}}
                />
            
            </button>
        </> 
    )
}

export default IconVoltar