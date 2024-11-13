import { useContext } from "react"
import { RotasContext } from "../context/RotasContext"

function Adicionar() {

    const { listaTemporaria, enunciadoCriado, setListaTemporaria, setEnunciadoCriado } = useContext(RotasContext)

    function addListaTemporaria() {

        if (enunciadoCriado != '') {

            const novaLista = [...listaTemporaria]                   // espalhando os itens de lista temporaria em novaLista
            setListaTemporaria(novaLista)                            // setando novaLista como uma nova lista temporaria
            novaLista.push(enunciadoCriado)                          // setando item na lista temporaria
            
            
            setEnunciadoCriado('')
            
            console.log(novaLista)
        }

    }
    
    return (
        <>
            <button 
            onClick={addListaTemporaria}
            className="p-2 bg-red-600 hover:bg-red-500 rounded-lg">
                <img src="../imagens/button-adicionar.png" 
                className="w-[30px] h-[30px]" />
            </button>
        </>
    )
}

export default Adicionar