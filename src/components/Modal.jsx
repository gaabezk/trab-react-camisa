import { Modal, Button } from 'react-bootstrap'

export default function Message({ show, handleClose, title, texto }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{texto}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary">Confirmar</Button>
                    <Button variant="secondary">Cancelar</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}
