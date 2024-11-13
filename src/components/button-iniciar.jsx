import { useContext, useState } from "react"
import { RotasContext } from "../context/RotasContext"

function Iniciar() {

    const { nomeJogo, setRenderLayout, listaJogosCriados } = useContext(RotasContext)

    function Inicia() {
        if (nomeJogo != '') {

        setRenderLayout('ModoPersonalizado')

    }
    }
    // verificar se algum jogo foi selecionado
    
    // acessar o array do jogo selecionado no select
    // direcionar para ModoPersonalizado passando a chave do jogo selecionado
    
    return (
        <>
            <button 
            onClick={Inicia}
            className="text-xl font-semibold p-2 bg-red-600 hover:bg-red-500 rounded-full w-40">
                Iniciar
            </button>
        </>
    )
}

export default Iniciar