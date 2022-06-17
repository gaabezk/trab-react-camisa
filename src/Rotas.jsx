import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro";
import { Carrinho } from "./pages/Carrinho";
import { Catalogo } from "./pages/Catalogo";
import { Contato } from "./pages/Contato";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Catalogo" element={<Catalogo />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Carrinho" element={<Carrinho />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}