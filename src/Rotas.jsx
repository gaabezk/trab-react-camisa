import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Administracao } from "./pages/Administracao";
import { Usuario } from "./pages/Usuario";
import { Catalogo } from "./pages/Catalogo";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Catalogo" element={<Catalogo />} />
                <Route path="/Usuario" element={<Usuario />} />
                <Route path="/Administracao" element={<Administracao />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}