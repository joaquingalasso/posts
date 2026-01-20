import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobPreview from "./JobPreview";
import Licitacion from "./Licitacion";
import SecundarioTarde from "./SecundarioTarde";
import InfoInstitucional from "./InfoInstitucional";
import Modulo1 from "./Modulo1";
import Modulo2 from "./Modulo2";
import Modulo3 from "./Modulo3";
import ModuloUnificado from "./ModuloUnificado";
import ModuloUnificadoVisual from "./ModuloUnificadoVisual";
import ModuloUnificadoInfo from "./ModuloUnificadoInfo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobPreview />} />
        <Route path="/licitacion" element={<Licitacion />} />
        <Route path="/secundario-tarde" element={<SecundarioTarde />} />
        <Route path="/info-institucional" element={<InfoInstitucional />} />
        <Route path="/modulo-1" element={<Modulo1 />} />
        <Route path="/modulo-2" element={<Modulo2 />} />
        <Route path="/modulo3" element={<Modulo3 />} />
        <Route path="/modulo-unico" element={<ModuloUnificado />} />
        <Route path="/modulo-unico-visual" element={<ModuloUnificadoVisual />} />
        <Route path="/modulo-unico-info" element={<ModuloUnificadoInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
