import React, {useState} from 'react'
import { Modal, Button, Container } from 'react-bootstrap';
import Origin from './Origin';
import Location from './Location'

const SeeMore = ({name, specie, location, locationUrl, origin, originUrl}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Button className="seeMore" variant="info" onClick={handleShow}>See more...</Button>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton className='ModalH'>
                    <Modal.Title id="contained-modal-title-vcenter" className="ModTitle">
                        {name + "  (" + specie + ")"}           
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        {origin === 'unknown' ?
                            null :
                            (<>
                                <h6>Origen: </h6>
                                <Origin originUrl={originUrl} />
                            </>)}
                        {location === 'unknown' ?
                            null :
                            (<>
                                <h6>Location: </h6>
                                <Location locationUrl={locationUrl} />
                            </>)}
                    </Container>    
                </Modal.Body>
                <Modal.Footer className="mdlFooter">
                    <Button onClick={handleClose} variant="secondary" className="modalbtn">Cerrar</Button>
                    <Button onClick={handleClose} className="modalbtn" variant="warning">Aceptar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SeeMore