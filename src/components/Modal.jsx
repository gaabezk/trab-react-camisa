import { Modal, Button } from 'react-bootstrap'

export default function Message({ show, handleClose, title, texto, acao }) {
    return (
        <Modal style={{marginTop:"80px"}} show={show} onHide={handleClose}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{texto}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={acao} variant="primary">Confirmar</Button>
                    <Button onClick={handleClose} variant="secondary">Cancelar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}
