import { useContext } from "react";
import { RotasContext } from '../context/RotasContext';

function CriarNovoJogo() {

    const { 
        nomeJogo, setNomeJogo, setEnunciadoCriado, 
        setRenderLayout, listaTemporaria, setListaTemporaria,
        CriadorDeJogo, setJogoAtual, setAvisoVisivel
        } = useContext(RotasContext);

    function CriaJogo(){

        if (nomeJogo != '' && listaTemporaria.length >= 5) {
            
            // instanciando o objeto CriadorDeJogo passando como parametro nomeJogo
            let NovoJogo = new CriadorDeJogo(nomeJogo)
            NovoJogo.enunciados = [...listaTemporaria]
            setJogoAtual(NovoJogo)
            
            // adicionando a instancia ao objeto listaJogosCriados do LS com a chave NovoJogo.nome e o valor NovoJogo.enunciados
            const jogosSalvos = JSON.parse(localStorage.getItem('listaJogosCriados')) || {}
            jogosSalvos[nomeJogo] = NovoJogo
            localStorage.setItem('listaJogosCriados', JSON.stringify(jogosSalvos))

            /* OBS.: Necessário atribuir o objeto do LS a uma variável 
            para manipulá-lo e mandar de volta pro LS usando a mesma key */

            // apagando dados dos inputs setNomeJogo, setEnunciadoCriado e listaTemporaria
            setNomeJogo('')
            setEnunciadoCriado('')
            setListaTemporaria([])

            // voltar para a pagina SelecaoPersonalizado
            setRenderLayout('SelecaoPersonalizado')
            
        } else {
            setAvisoVisivel(true)
        }
    }
    
    return (
        <>
            <button 
            onClick={CriaJogo}
            className="text-xl font-semibold p-2 bg-red-600 hover:bg-red-500 rounded-full w-60">
                Criar novo jogo
            </button>
        </>
    )
}

export default CriarNovoJogo