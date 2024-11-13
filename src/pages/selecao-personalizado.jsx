import IconVoltar from "../components/button-icon-voltar"
import SelectJogo from "../components/select-jogo"
import NovoJogo from "../components/button-novo-jogo"
import Voltar from "../components/button-voltar.jsx"
import Iniciar from "../components/button-iniciar.jsx"

function SelecaoPersonalizado() {

    return (
        <>
            
                
                <div className="flex flex-row justify-center w-4/5">

                    <h1 className="mt-5 text-white font-semibold">Personalizado</h1>
                    

                </div>

                <div className="flex flex-col w-3/4 space-y-8">  
                        
                        <div className="flex flex-row justify-between w-full">
                            <span className="text-xl">Selecione o jogo:</span>
                            <SelectJogo/>
                        </div>

                        <div className="flex flex-row justify-center w-full">
                            <NovoJogo/>
                        </div>

                        <div className="flex flex-row justify-between w-full">
                            <Voltar/>
                            <Iniciar/>
                        </div>

                </div>

        </>
    )
}

export default SelecaoPersonalizado