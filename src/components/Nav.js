import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../estilos/Nav.css"

function Nav() {
    let links = [
        {id: 0, url: "/Restaurante", nombre: "Inicio"},
        //{id: 1, url: "Info", nombre: "Sobre Nosotros"},
        {id: 2, url: "/Reservas", nombre: "Reservas"},
        //{id: 3, url: "/Delivery", nombre: "Delivery"},
        {id: 4, url: "/Menu", nombre: "Menu"},
        {id: 5, url: "/Contacto", nombre: "Contacto"}
    ];
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="links">
                {links.map(link => (
                    <NavLink
                        className={({ isActive }) => (isActive ? "link active" : "link")}
                        key={link.id}
                        to={link.url}
                    >
                        <li>{link.nombre}</li>
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;