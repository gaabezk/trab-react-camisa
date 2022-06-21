import { Modal, Button } from 'react-bootstrap'
import {useState} from "react";
import API from "../API";
import {Alert, AlertTitle, Stack} from "@mui/material";


export default function adicionarAoCarrinho({ show, handleClose, title, texto,id}) {

    const [quantidade, setQuantidade] = useState();
    const [usuario, setUsuario] = useState();

    function comprar(e){
        e.preventDefault();
        API.post(`/pedido/${usuario}`, {
                id: `${id}`,
                quantidade: `${quantidade}`
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        )
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
        handleClose();
    }

    function deuCerto(){
        return(
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Adicionado ao carrinho!
            </Alert>
        )
    }

    return (
        <Modal style={{marginTop:"80px"}} show={show} onHide={handleClose}>
            {deuCerto()}
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{texto}</p>
                        <div className="input">
                            <input type="number" min="1" placeholder="Quantidade" onChange={(e) => setQuantidade(e.target.value)}/>
                            <input type="text" placeholder="CPF" onChange={(e) => setUsuario(e.target.value)}/>
                        </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={(e)=>comprar(e)} variant="primary">Confirmar</Button>
                    <Button onClick={handleClose} variant="secondary">Cancelar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}
