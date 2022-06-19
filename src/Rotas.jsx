import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Administracao } from "./pages/Administracao";
import { Usuario } from "./pages/Usuario";
import { Carrinho } from "./pages/Carrinho";
import { Catalogo } from "./pages/Catalogo";
import { Contato } from "./pages/Contato";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { QuemSomos } from "./pages/QuemSomos";

export function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Catalogo" element={<Catalogo />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Carrinho" element={<Carrinho />} />
                <Route path="/Usuario" element={<Usuario />} />
                <Route path="/Administracao" element={<Administracao />} />
                <Route path="/Quem-somos" element={<QuemSomos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}