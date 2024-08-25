import Especiales from "../components/Especiales"
import menu from "../assets/menu.webp"
function Menu(){
    return(
        <>
            <div className="pagina-menu">
                <div>
                    <h1>Especiales</h1>
                    <div className="especiales">
                        <Especiales/>
                    </div>
                </div>
                <div className="menu">
                    <h2>Menu</h2>
                    <img src={menu} alt="Menu Little-Lemon"></img>
                </div>
            </div>
        </>
    )
}
export default Menu