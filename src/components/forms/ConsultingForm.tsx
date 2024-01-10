import axios from 'axios'
import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask';
import { Button, Form } from 'react-bootstrap'

type Props = {}

interface IConsultingFormValues {
    name: string
    phone: string
    email: string
}

class ConsultingFormValues implements IConsultingFormValues {
    name: string
    phone: string
    email: string
    constructor() {
        this.name = ''
        this.phone = ''
        this.email = ''
    }
}

const ConsultingForm = (props: Props) => {
    const [formValues, setFormValues] = useState<ConsultingFormValues>(new ConsultingFormValues())

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault()
        axios.post('https://send-mail.jhokipery.space/api/Email/Send', {
            "from": "bklnclean",
            "to": "infobklnclean@gmail.com",
            "subject": "For consultation",
            "body": `<ul>
          <li>Name: ${formValues.name}</li>
          <li>Phone: ${formValues.phone}</li>
          <li>Email: ${formValues.email}</li>
          </ul>`
        }).then((response) => {
            if (response.status == 200) {
                alert('Our managers will contact you shortly.')
                setFormValues(new ConsultingFormValues())
            }
        })
    }



    return (
        <Form onSubmit={(e) => submitForm(e)} id="index-banner-form">
            <Form.Group controlId="name">
                <Form.Control
                    type="text"
                    placeholder="Your name"
                    required={true}
                    value={formValues.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValues((prev) => ({ ...prev, name: e.target.value }))}
                />
            </Form.Group>
            <Form.Group controlId="phone">
                <Form.Control
                    type="text"
                    placeholder="Your phone"
                    value={formValues.phone}
                    required={true}
                    as={ReactInputMask}
                    mask="(999) 999-9999"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValues((prev) => ({ ...prev, phone: e.target.value }))}
                />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Control
                    type="email"
                    placeholder="Your email"
                    value={formValues.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValues((prev) => ({ ...prev, email: e.target.value }))}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Get a consultation
            </Button>
        </Form>
    )
}

export default ConsultingForm