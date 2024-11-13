import { useContext } from "react"
import Adicionar from "../components/button-adicionar"
import CriarNovoJogo from "../components/button-CriarNovoJogo"
import IconVoltar from "../components/button-icon-voltar"
import { RotasContext } from "../context/RotasContext"

function CriacaoPersonalizado() {

    const { listaTemporaria, enunciadoCriado, setNomeJogo, setEnunciadoCriado, setAvisoVisivel, avisoVisivel } = useContext(RotasContext)

    function fechar() {
        setAvisoVisivel(false)
    }

    return (
        <> 
            <div className="w-full flex flex-col m-auto ">
                
                <div className="flex flex-col space-y-6 items-center" >
                    <div className="relative flex flex-row justify-between w-4/5">

                        <IconVoltar />
                        <h1 className="mt-5 text-white text-2xl font-semibold">Crie suas perguntas e desafios</h1>  
                        <div className="w-10"></div> 

                    </div>

                    <div className="flex flex-col w-3/4">  
        
                        <div className="flex flex-col justify-between space-y-4 w-full">

                            <div className="flex flex-row justify-between w-full">
                                <span className="text-sm">Escolha um nome:</span>
                                <span className="text-sm">Crie uma pergunta ou desafio:</span>
                            </div>

                            <div className="flex flex-row justify-between w-full">
                                <input 
                                onChange={(event) => setNomeJogo(event.target.value)}
                                type="text" 
                                className="w-40 rounded-xl text-lg text-black pl-3"
                                placeholder="Ex.: Jogo 1"
                                />
                                <input 
                                type="text" 
                                value = {enunciadoCriado}
                                onChange={(event) => setEnunciadoCriado(event.target.value)}
                                className="w-40 rounded-xl text-sm text-black pl-3"
                                placeholder="Ex.: Eu nunca..."
                                />
                            </div>

                            <div className="flex flex-row items-center justify-between w-full">
                                <span
                                className="text-sm font-semibold"
                                >Criados: {listaTemporaria.length}</span>
                                <Adicionar/>
                            </div>

                            <div className="flex flex-row justify-center w-full">
                                <CriarNovoJogo/>
                            </div>

                        </div>
                    </div>
                </div>



                <div 
                className={`${avisoVisivel ? "absolute top-0 bottom-0 flex inset-0" : "hidden"}  items-center justify-center h-full bg-black bg-opacity-30 rounded-3xl`}>
                    <div 
                    style={{ backgroundColor: '#d9d9d9' }}
                    className="flex flex-col space-y-6 w-[400px] h-[200px] rounded-3xl text-xl text-black p-5 bg-gray-800">

                    <div className="flex justify-between w-full">

                        <div className="w-5"></div>
                            <img className="w-10" src="../imagens/icone-aviso.png" alt="Ícone de aviso" />
                            <button
                            className="w-10"
                            onClick={fechar}
                            >
                                <img src="../imagens/x.png" alt="Fechar aviso" />
                            </button>

                        </div>

                        <div>Dê um nome e insira pelo menos 5 itens para criar um novo jogo!</div>
                    
                    </div>
                </div>

            </div>
                
        </>
    )
}

export default CriacaoPersonalizado