import { useContext} from "react"
import { RotasContext } from '../context/RotasContext';

function ButtonPersonalizado() {

    const {setRenderLayout} = useContext(RotasContext)

    function PagePersonalizado(){
        setRenderLayout('SelecaoPersonalizado')
    }

    return (
        <>
            <button 
            onClick={PagePersonalizado}
            className="
            transform transition duration-300 hover:scale-110
            px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-tl-3xl rounded-br-3xl">
                Personalizado
            </button>
        </>
    )
}

export default ButtonPersonalizado