import { useContext } from "react"
import { RotasContext } from '../context/RotasContext';

function BotaoPassar() {

    const { 
        setPergunta, 
        listaPerguntas, 
        listaDesafios, 
        setDesafio, 
        renderLayout, 
        jogoAtual, 
        setEnunciadoAtual
    } = useContext(RotasContext)

    function NovoEnunciado(){
        
        if (renderLayout === 'ModoEuNunca'){
            
            setPergunta(listaPerguntas[Math.floor(Math.random() * listaPerguntas.length)])
            
        }

        if (renderLayout === 'ModoDesafios'){
            
            setDesafio(listaDesafios[Math.floor(Math.random() * listaDesafios.length)])
            
        }

        if (renderLayout === 'ModoPersonalizado') {
            setEnunciadoAtual(jogoAtual.enunciados[Math.floor(Math.random() * jogoAtual.enunciados.length)])
        }
    }

   


    return (
        <>
        
            <button 
            onClick={NovoEnunciado}
            className="p-2 pl-8 bg-red-600 hover:bg-red-500 rounded-full w-40">
                <img
                src="../imagens/button-passar.png"
                style={{width: '100px', height:'40px'}}
                 />
            </button>
        
        </>
    )
}

export default BotaoPassar