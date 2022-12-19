import Menu from "./components/Menu";
import "./App.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Detalles from "./components/Cards/Detalles";
import Temporadas from "./components/Temporadas";
import SobreSerie from "./components/SobreSerie";
import { Principal } from "./components/Principal";
import { PersonajesMain } from "./components/Cards/PersonajesMain";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/personajes" element={<PersonajesMain />} />
        <Route path="/personajes/detalles/:id" element={<Detalles />} />
        <Route path="/temporadas" element={<Temporadas />} />
        <Route path="/sobre_la_serie" element={<SobreSerie />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
