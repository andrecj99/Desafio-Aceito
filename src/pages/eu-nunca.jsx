import React,{ useState, useContext } from "react";
import IconVoltar from "../components/button-icon-voltar";
import BotaoPassar from "../components/button-icon-passar";
import { RotasContext } from "../context/RotasContext";

function ModoEuNunca() {

    const { pergunta } = useContext(RotasContext)

    return (
        <>
            
                
                <div className="flex flex-row justify-between w-4/5">

                    <IconVoltar/>
                    <h1 className="mt-5 text-white font-semibold">Eu Nunca</h1>
                    <div className="w-10"></div>

                </div>

                <div className="h-20"> {pergunta} </div>
                
                <div className="p-4">
                    <BotaoPassar/>
                </div>
           
        </>
    )
}

export default ModoEuNunca