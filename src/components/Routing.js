import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/Inicio"
import Informacion from "../paginas/Informacion"
import Reservacion from "../paginas/Reservas"
import Delivery from "../paginas/Delivery"
import Menu from "../paginas/Menu"
import Contacto from "../paginas/Contacto"
export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Info" element={<Informacion/>}/>
      <Route path="/Reservas" element={<Reservacion/>}/>
      <Route path="/Delivery" element={<Delivery />}/>
      <Route path="/Menu" element={<Menu/>} />
      <Route path="/Contacto" element={<Contacto/>} />
    </Routes>
  );
}
