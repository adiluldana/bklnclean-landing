import React, { Fragment, useState } from 'react'
import { ListGroup, Modal } from 'react-bootstrap';

type Props = {}

const OfficeBookingServicesModal = (props: Props) => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cleaningTasks: string[] = [
        "Dry floor cleaning with a vacuum cleaner or broom",
        "Wet cleaning of floors and baseboards",
        "Wet cleaning of window sills",
        "Wet cleaning of doors",
        "Emptying trash, removing and replacing with new bags",
        "Vacuum cleaning of carpets and upholstered furniture",
        "Dusting office appliances",
        "Dusting accessories, interior items, design elements (vases, picture frames, photo frames, etc.)",
        "Cleaning of all types of furniture (tabletops, shelves, sofas, chairs, and other surfaces)",
        "Washing waste baskets and storage space for waste",
        "Hygienic cleaning of sanitary areas with the removal of all types of dirt from the surface of the floor, walls, ceiling, ventilation grilles, toilets, toilet seats, urinals, sinks, waste bins, using cleaning supplies with a disinfectant effect",
        "Checking and filling the dispensers of liquid soap, toilet paper, paper towels, and etc. (if provided)",
        "Cleaning mirrors and glass surfaces",
        "Wet cleaning of urns and ashtrays on stairs and entrance lobbies",
        "Wet cleaning of office appliances, lighting devices, sockets, and switches",
        "Cleaning of radiators",
        "Once a month total clear-out: wet cleaning of windows, tile, cleaning hard-to-reach places",
    ];
    return (
        <Fragment>
            <button
                className="btn btn-primary"
                type="button"
                onClick={handleShow}
            >
                Our office cleaning services
            </button>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Our office cleaning services</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup className="our-office-cleaning-services-list">
                        {cleaningTasks.map((m, i) => {
                            return <ListGroup.Item key={i}>{m}</ListGroup.Item>;
                        })}
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default OfficeBookingServicesModal