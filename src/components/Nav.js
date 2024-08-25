import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../estilos/Nav.css"

function Nav() {
    let links = [
        {id: 0, url: "/", nombre: "Inicio"},
        //{id: 1, url: "info", nombre: "Sobre Nosotros"},
        {id: 2, url: "/reservas", nombre: "Reservas"},
        //{id: 3, url: "/delivery", nombre: "Delivery"},
        {id: 4, url: "/menu", nombre: "Menu"},
        {id: 5, url: "/contacto", nombre: "Contacto"}
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