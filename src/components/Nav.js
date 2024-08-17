import { Link } from "react-router-dom"
import logo from "../assets/logo.jpg"
function Nav(){
    let links = [
        {id:0,url:"/",nombre:"Inicio"},
        {id:1,url:"/info",nombre:"Sobre nosotros"},
        {id:2,url:"/reservas",nombre:"Reservas"},
        {id:3,url:"/delivery",nombre:"Delivery"},
        {id:4,url:"/menu", nombre:"Menu"},
        {id:5,url:"/contacto", nombre:"Contacto"}
    ]
    return(
        <>
        <ul className="links">
            <img src={logo} alt="Logo"/>
            { links.map(link=>(
                <Link className="link" key={link.id} to={link.url}><li>{link.nombre}</li></Link>
            ))
            }
        </ul>
        </>
    )
}
export default Nav