import Menu from "./components/Menu";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Detalles from "./components/Cards/Detalles";
import Temporadas from "./components/Temporadas";
import SobreSerie from "./components/SobreSerie";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detalles/:id" element={<Detalles></Detalles>} />
        <Route path="/temporadas" element={<Temporadas></Temporadas>} />
        <Route path="/sobre_la_serie" element={<SobreSerie></SobreSerie>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
