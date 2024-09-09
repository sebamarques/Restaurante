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
      <Route path="/restaurante" element={<Inicio />} />
      <Route path="/info" element={<Informacion/>}/>
      <Route path="/reservas" element={<Reservacion/>}/>
      <Route path="/delivery" element={<Delivery />}/>
      <Route path="/menu" element={<Menu/>} />
      <Route path="/contacto" element={<Contacto/>} />
    </Routes>
  );
}
