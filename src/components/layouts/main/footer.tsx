import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import ReactInputMask from 'react-input-mask';
import { CONTACTS } from '../../../helpers/constants/contacts';
import { SOCIALS } from '../../../helpers/constants/socials';

type Props = {}

interface IFooterOrderServiceFormValues {
    name: string
    email: string
    phone: string
    type: string
}

class FooterOrderServiceFormValues implements IFooterOrderServiceFormValues {
    name: string
    email: string
    phone: string
    type: string
    constructor() {
        this.name = ''
        this.email = ''
        this.phone = ''
        this.type = ''
    }
}

function Footer({ }: Props) {
    const cleaningTypes: string[] = [
        "Apartment cleaning",
        "Office cleaning",
        "Deep cleaning",
        "Window cleaning",
        "Carpet and upholstery cleaning",
        "Bathroom cleaning",
    ];
    const [sended, setSended] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => {
        setShow(false);
        setSended(false);
    };
    const handleShow = () => setShow(true);

    const [formValues, setFormValues] = useState<FooterOrderServiceFormValues>(new FooterOrderServiceFormValues());

    const handleChange = (e: React.ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios
            .post("https://send-mail.jhokipery.space/api/Email/Send", {
                from: "bklnclean",
                to: "infobklnclean@gmail.com",
                subject: "New order",
                body: `<h1>New order from bklnclean.com.</h1>
          <br/> 
          <ul>
            <li>Name: ${formValues.name}</li>
            <li>Email: <a href="mailto:${formValues.email}">${formValues.email}</a></li>
            <li>Phone: <a href="tel:+${formValues.phone.replace(/\D/g, "")}">${formValues.phone
                    }</a></li>
            <li>Service type: ${formValues.type}</li>
          </ul>`,
            })
            .then((response) => {
                if (response.status == 200) {
                    setSended(true);
                }
            });
    };



    return (
        <Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Order service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {sended ? (
                        <>
                            <h3 className="fw-bold text-success">Thanks for order!</h3>
                            <p>Our managers will contact you shortly</p>
                        </>
                    ) : (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="name" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formValues.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="email" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="phone" className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    placeholder="Enter your phone"
                                    value={formValues.phone}
                                    onChange={handleChange}
                                    required
                                    as={ReactInputMask}
                                    mask="(999) 999-9999"
                                />
                            </Form.Group>

                            <Form.Group controlId="type" className="mb-3">
                                <Form.Label>Service</Form.Label>
                                <Form.Select
                                    value={formValues.type}
                                    name="type"
                                    onChange={handleChange}
                                >
                                    {cleaningTypes.map((m, i) => {
                                        return (
                                            <option value={m} key={i}>
                                                {m}
                                            </option>
                                        );
                                    })}
                                </Form.Select>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    )}
                </Modal.Body>
            </Modal>

            <footer>
                <div className="footer-header">
                    <div className="container">

                        <div className="footer-contacts">

                            {/* address */}
                            <div className="item">
                                <span dangerouslySetInnerHTML={{ __html: CONTACTS.locations.icon }}></span>
                                <div>
                                    {
                                        CONTACTS.locations.values.map((location, index) => {
                                            return <a key={index} href={location.googleMapLink}>{location.addressLine}</a>
                                        })
                                    }
                                </div>
                            </div>

                            {/* phones */}
                            <div className="item">
                                <span dangerouslySetInnerHTML={{ __html: CONTACTS.phones.icon }}></span>
                                <div>
                                    {
                                        CONTACTS.phones.values.map((phone, index) => {
                                            return <a key={index} href={'tel:+1' + phone.replace(/\D/g, '')}>{phone}</a>
                                        })
                                    }
                                </div>
                            </div>

                            {/* emails */}
                            <div className="item">
                                <span dangerouslySetInnerHTML={{ __html: CONTACTS.emails.icon }}></span>
                                <div>
                                    {
                                        CONTACTS.emails.values.map((email, index) => {
                                            return <a key={index} href={'mailto:' + email}>{email}</a>
                                        })
                                    }
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="footer-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h3>
                                    Brooklyn <br /> Cleaning Service
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quidem officiis eum quaerat quas fugit, repellendus aliquid.
                                </p>
                            </div>

                            <div className="col-md-3">
                                <h4>Services</h4>
                                <ul>
                                    {cleaningTypes.map((m, i) => {
                                        return (
                                            <li
                                                key={i}
                                                onClick={() => {
                                                    setFormValues((prev) => ({
                                                        ...prev,
                                                        type: m,
                                                    }));
                                                    handleShow();
                                                }}
                                            >
                                                {m}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <h4>Additional</h4>
                                <ul>
                                    <li>
                                        <a href="/">CONTACTS</a>
                                    </li>
                                    <li>
                                        <a href="/">Privacy policy</a>
                                    </li>
                                    <li>
                                        <a href="/">Terms and conditions</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <h4>We are on social </h4>
                                <ul className="social">
                                    {SOCIALS.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <a
                                                    href={item.link}
                                                    dangerouslySetInnerHTML={{ __html: item.icon }}
                                                ></a>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <p>
                                    Brooklyn Cleaning Service{" "}
                                    <span>{new Date().getFullYear()}</span>. <br /> All rights
                                    reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer