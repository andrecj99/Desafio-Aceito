import IconVoltar from "../components/button-icon-voltar"
import BotaoPassar from "../components/button-icon-passar"
import { RotasContext } from '../context/RotasContext';
import { useContext } from "react";

function ModoPersonalizado() {

    const { nomeJogo, jogoAtual, enunciadoAtual, setEnunciadoAtual } = useContext(RotasContext)

    // receber jogo selecionado pelo usuario
    
    
    
     setEnunciadoAtual(jogoAtual.enunciados[Math.floor(Math.random() * jogoAtual.enunciados.length)]);

    

    // a div do enunciado vai receber randomicamente um dos valores presentes no objeto criado pelo usuário
    // BotaoPassar vai selecionar randomicamente um valor do array que está sendo utilizado e renderizar o conteúdo na div do enunciado

    return (
        <>
            
                
                <div className="flex flex-row justify-between w-4/5">

                    <IconVoltar/>
                    <h1 className="mt-5 text-white font-semibold"> {nomeJogo} </h1>
                    <div className="w-10"></div>

                </div>

                <div className="h-20"> { enunciadoAtual } </div>
                
                <div className="p-4">
                    <BotaoPassar/>
                </div>
           
        </>
    )
}

export default ModoPersonalizado