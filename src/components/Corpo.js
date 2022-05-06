import Esquerda from "./Esquerda"
import Sidebar from "./Sidebar"
import FundoMobile from "./Fundo-mobile"

export default function Corpo () {
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />
            <FundoMobile />
        </div>
    )
}