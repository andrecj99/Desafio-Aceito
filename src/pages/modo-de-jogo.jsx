import React, { useContext } from "react"
import ButtonDesafios from "../components/button-desafios"
import ButtonEuNunca from "../components/button-eu-nunca"
import ButtonPersonalizado from "../components/button-personalizado"
import { RotasContext } from '../context/RotasContext';

function ModoDeJogo() {

    const {setRenderLayout} = useContext(RotasContext)

    return (
        <>
            
                
                <h1 className="mt-5">Selecione o modo de jogo:</h1>
                
                <div className="flex flex-col space-y-4 w-64 border-zinc-50">
                    <ButtonEuNunca/>
                    <ButtonDesafios/>
                    <ButtonPersonalizado/> 
                </div>
                
            
        </>
    )
}

export default ModoDeJogo