import React, { Fragment, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import CommercialWithDiscountForm from '../forms/CommercialWithDiscountForm'

type Props = {
    discount: number
}

const CommercialWithDiscountModal = (props: Props) => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => setShow(true);
    return (
        <Fragment>
            <Button onClick={handleShow}>Choose plan</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Get discount for commercial clients</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 className='fw-bold discount-title'>{props.discount === 10 ? '10% with 6 month contract' : '20% with 1 year contract'}</h3>
                    <CommercialWithDiscountForm discount={props.discount} />
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default CommercialWithDiscountModal