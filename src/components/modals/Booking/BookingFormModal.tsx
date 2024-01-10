import React, { Fragment, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import BookingForm from '../../forms/Booking/BookingForm';

type Props = {}

const BookingFormModal = (props: Props) => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <Button variant="primary" onClick={handleShow}>
                Make service
            </Button>
            <Modal show={show} size={'xl'} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Make service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BookingForm handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default BookingFormModal