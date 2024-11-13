import { useContext } from "react"
import { RotasContext } from "../context/RotasContext"

function SelectJogo() {
    
    // acessar a lista de itens criados no local storage:  LS -> {jogo1: [], jogo2: [], ... }
    const { JogosSalvos, setJogoAtual, setNomeJogo, nomeJogo } = useContext(RotasContext)
    
    // criar lista de options exibindo jogos criados pelo nome
    const ListaNomes = Object.keys(JogosSalvos)

    function selecionaJogo(event) {
        const jogoSelecionado = event.target.value
        setJogoAtual(JogosSalvos[jogoSelecionado])

        const nome = JogosSalvos[jogoSelecionado].nome
        setNomeJogo(nome)
    }
    
    return (
        <>
            <select 
            onChange={selecionaJogo}
            name="jogos" 
            id="jogos"
            className="w-40 text-lg text-center text-black rounded-xl"
            >
                <option value="">Selecione</option>
                { ListaNomes.map((nomeJogo) => (
                    <option 
                    value={nomeJogo} key={nomeJogo}> {nomeJogo} </option>
                ))
                
                }

            </select>
        </>
    )
}

export default SelectJogo