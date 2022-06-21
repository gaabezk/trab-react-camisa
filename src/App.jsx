import {Rotas} from "./Rotas";
import {Footer} from "./components/Footer";
import {Nav} from "./components/Nav";

function App() {

    return (

        <>
            {/* ================Renderiza navbar================ */}
            <div style={{paddingBottom:"70px"}}><Nav /></div>

            {/* ======Renderiza a pagina do url digitado ====== */}
            <Rotas/>

            <br/>
            <br/>
            {/* =========Renderiza rodapé========= */}
            <Footer/>
        </>
    );
    
}

export default App