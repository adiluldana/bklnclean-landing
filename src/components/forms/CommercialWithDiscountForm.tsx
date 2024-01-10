import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import ReactInputMask from 'react-input-mask'

type Props = {
    discount: number
}

interface ICommercialDiscountFormValues {
    name: string
    phone: string
    email: string
    companyName: string
    discount: number
}



const CommercialWithDiscountForm = (props: Props) => {
    class CommercialDiscountFormValues implements ICommercialDiscountFormValues {
        name: string
        phone: string
        email: string
        companyName: string
        discount: number
        constructor() {
            this.name = ''
            this.phone = ''
            this.email = ''
            this.companyName = ''
            this.discount = props.discount
        }
    }

    const [formValues, setFormValues] = useState<CommercialDiscountFormValues>(new CommercialDiscountFormValues())

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        axios.post('https://send-mail.jhokipery.space/api/Email/Send', {
            "from": "bklnclean",
            "to": "infobklnclean@gmail.com",
            "subject": "Commercial clients with discount Plan",
            "body": `<ul>
          <li>Name: ${formValues.name}</li>
          <li>Phone: ${formValues.phone}</li>
          <li>Email: ${formValues.email}</li>
          <li>Company name: ${formValues.companyName}</li>
          <li>Discount: ${formValues.discount}%</li>
          </ul>`
        }).then((response) => {
            if (response.status == 200) {
                alert('Our managers will contact you shortly.')
                setFormValues(new CommercialDiscountFormValues())
            }
        })
    }

    const handleChange = (e: React.ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    return (

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

            <Form.Group controlId="companyName" className="mb-3">
                <Form.Label>Company name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your company name"
                    value={formValues.companyName}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CommercialWithDiscountForm