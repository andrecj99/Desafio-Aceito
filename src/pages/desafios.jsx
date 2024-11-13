import IconVoltar from "../components/button-icon-voltar"
import BotaoPassar from "../components/button-icon-passar"
import { useContext } from "react"
import { RotasContext } from "../context/RotasContext"

function ModoDesafios() {

    const {desafio} = useContext(RotasContext)

    return (
        <>
            
                
                <div className="flex flex-row justify-between w-4/5">

                    <IconVoltar/>
                    <h1 className="mt-5 text-white font-semibold">Desafios</h1>
                    <div className="w-10"></div>

                </div>

                <div  className="h-20 "> {desafio} </div>
                
                <div className="p-4">
                    <BotaoPassar/>
                </div>
         
        </>
    )
}

export default ModoDesafios