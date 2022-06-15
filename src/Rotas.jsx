import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Carrinho} from "./pages/Carrinho";
import {Catalogo} from "./pages/Catalogo";
import {Teste} from "./pages/Teste";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";

export function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Catalogo" element={<Catalogo/>}/>
                <Route path="/Teste" element={<Teste/>}/>
                <Route path="/Carrinho" element={<Carrinho/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}