import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import BookingExtraItem from './BookingExtraItem'
import { CONTACTS } from '../../../helpers/constants/contacts'

import ReactInputMask from 'react-input-mask';

export interface IContacts {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
}

export interface Bedroom {
    id: number
    title: string
    standart: {
        price: number
        time: string
    }
    deep: {
        price: number
        time: string
    }
    [key: string]: any
}

export interface ICleaningType {
    id: number
    title: string
}

export interface IExtra {
    id: number
    title: string
    price: number
    counter: number
    needCounter: boolean
    icon: string
}

export interface IFrequency {
    id: number
    title: string
    discount: number
}


export interface ITotal {
    service: number
    extras: number
    subTotal: number
    taxes: number
    discount: number
    total: number
    frequency: IFrequency
    contacts: Contacts
}

export interface BookingFormValues {
    bedrooms: Bedroom
    bathrooms: number
    cleaningType: ICleaningType
    extras: IExtra[]
    additional: string
}

export class Contacts implements IContacts {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    constructor() {
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.phone = ''
        this.address = ''
    }
}

type Props = {
    handleClose: () => void
}

const BookingForm = (props: Props) => {


    const bedrooms: Bedroom[] = [
        {
            id: 1,
            title: "Studio (<500 Sq Ft)",
            standart: {
                price: 114,
                time: '2h'
            },
            deep: {
                price: 142,
                time: '2h 30m'
            }
        },
        {
            id: 2,
            title: "1 Bedrooms (<800 Sq Ft)",
            standart: {
                price: 142,
                time: '2h 30m'
            },
            deep: {
                price: 171,
                time: '3h'
            }
        },
        {
            id: 3,
            title: "2 Bedrooms (<1200 Sq Ft)",
            standart: {
                price: 171,
                time: '3h'
            },
            deep: {
                price: 199,
                time: '3h 30m'
            }
        },
        {
            id: 4,
            title: "3 Bedrooms (<1600 Sq Ft)",
            standart: {
                price: 171,
                time: '3h'
            },
            deep: {
                price: 228,
                time: '4h'
            }
        },
        {
            id: 5,
            title: "4 Bedrooms (<2000 Sq Ft)",
            standart: {
                price: 199,
                time: '3h 30m'
            },
            deep: {
                price: 256,
                time: '4h 30m'
            }
        }
    ]

    const cleaningTypes: ICleaningType[] = [
        {
            id: 1,
            title: 'standart',
        },
        {
            id: 2,
            title: 'deep'
        }
    ]

    const frequencies = [
        {
            id: 1,
            title: 'One time',
            discount: 0
        },
        {
            id: 2,
            title: 'Weekly -20% off',
            discount: 0.2
        },
        {
            id: 3,
            title: 'Monthly -10% off',
            discount: 0.1
        }
    ]

    const extras: IExtra[] = [
        {
            id: 1,
            title: 'Inside of fridge',
            price: 30,
            needCounter: false,
            counter: 1,
            icon: '/images/extras/icons8-fridge-94.png'
        }, {
            id: 2,
            title: 'Inside of oven',
            price: 20,
            needCounter: true,
            counter: 1,
            icon: '/images/extras/icons8-cooker-94.png'
        }, {
            id: 3,
            title: 'Interior Kitchen Cabinets (Empty)',
            price: 40,
            needCounter: false,
            counter: 1,
            icon: '/images/extras/icons8-wardrobe-94.png'
        }, {
            id: 4,
            title: 'Laundry (wash & fold)',
            price: 30,
            needCounter: true,
            counter: 1,
            icon: '/images/extras/icons8-washing-machine-60.png'
        }, {
            id: 5,
            title: 'Oraganizing/Packing (30 Min)',
            price: 25,
            needCounter: true,
            counter: 1,
            icon: '/images/extras/icons8-warehouse-96.png'
        }, {
            id: 6,
            title: 'Inside Windows (30 Min)',
            price: 15,
            needCounter: true,
            counter: 1,
            icon: '/images/extras/icons8-restore-window-96.png'
        }, {
            id: 7,
            title: 'After renovation',
            price: 80,
            needCounter: false,
            counter: 1,
            icon: '/images/extras/icons8-paint-roller-96.png'
        }, {
            id: 8,
            title: 'Wall washing (60 min)',
            price: 40,
            needCounter: true,
            counter: 1,
            icon: '/images/extras/icons8-wall-96.png'
        }, {
            id: 9,
            title: 'Hand Wash Dishes',
            price: 20,
            needCounter: true,
            counter: 1,
            icon: '/images/extras/icons8-tea-cup-96.png'
        }, {
            id: 9,
            title: 'Patio or Balcony',
            price: 35,
            needCounter: true,
            counter: 1,
            icon: '/images/extras/icons8-balcony-96.png'
        }
    ]

    const [btnSubmit, setBtnSumbit] = useState<boolean>(false)

    const [formValues, setFormValues] = useState<BookingFormValues>({
        bedrooms: bedrooms[0],
        bathrooms: 1,
        cleaningType: cleaningTypes[0],
        extras: [],
        additional: ''
    })

    class Total implements ITotal {
        service: number
        extras: number
        subTotal: number
        taxes: number
        discount: number
        total: number
        frequency: IFrequency
        contacts: Contacts
        constructor() {
            this.frequency = frequencies[0]
            this.service = bedrooms[0].standart.price + 30
            this.discount = 0.00
            this.extras = 0.00
            this.subTotal = this.service
            this.taxes = this.service * 0.1
            this.total = this.service + this.taxes
            this.contacts = new Contacts()
        }
    }

    const [total, setTotal] = useState<Total>(new Total())

    const calculateTotal = () => {
        setTotal((prev) => {
            let service = formValues.bedrooms[formValues.cleaningType.title].price
                + formValues.bathrooms * 30

            let extras = formValues.extras.length == 0 ? 0.00 : formValues.extras.reduce((acc, extra) => {
                acc += extra.price * extra.counter;
                return acc
            }, 0);
            let subTotal = service + extras;
            let discount = subTotal * total.frequency.discount;
            subTotal = subTotal - subTotal * total.frequency.discount;
            let taxes = subTotal * 0.1;

            return {
                ...prev,
                service,
                extras,
                subTotal,
                taxes,
                discount,
                total: subTotal + taxes
            }
        })
    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        setBtnSumbit(true)

        let html = `<ul>
        <li>
            Contacts:
            <ul>
                <li>
                    Name : ${total.contacts.firstName} ${total.contacts.lastName}
                 </li>
                <li>
                    Email : <a href="mailto:${total.contacts.email}">${total.contacts.email}</a>
                </li>
                <li>
                    Phone: <a href="tel:${total.contacts.phone}">${total.contacts.phone}</a>
                </li>
            </ul>
        </li>
        <li>
            Address: ${total.contacts.address}
        </li>
        <li>Bedrooms: ${formValues.bedrooms.title}</li>
        <li>Bathrooms:${formValues.bathrooms}</li>
        <li>Cleaning type: ${formValues.cleaningType.title}</li>
        <li>
            Extras:
            <ul>`;

        for (let extra of formValues.extras) {
            html += `<li>
            ${extra.title} - ${extra.counter}
        </li>`
        }



        html += `</ul></li>
        <li>
            Additional: ${formValues.additional}
        </li>
        <li>
            Frequency: ${total.frequency}
        </li>
    </ul>
    
    <hr>
    
    <ul>
        <li>Service: ${total.service.toFixed(2)}</li>
        <li>Extras: ${total.extras.toFixed(2)}</li>
        <li>Discount: ${total.discount.toFixed(2)}</li>
        <li>Subtotal: ${total.subTotal.toFixed(2)}</li>
        <li>Taxes: ${total.taxes.toFixed(2)}</li>
        <li>Total: <b>${total.total.toFixed(2)}</b> </li>
    </ul>`;

        console.log(html)

        axios.post('https://send-mail.jhokipery.space/api/Email/Send', {
            "from": "bklnclean",
            "to": "infobklnclean@gmail.com",
            "subject": "New order",
            "body": html
        }).then((response) => {
            if (response.status == 200) {
                alert('Thank you for contacting us! \n Our managers will contact you shortly.')
                setBtnSumbit(false)
                setTotal(new Total())

                setFormValues({
                    bedrooms: bedrooms[0],
                    bathrooms: 1,
                    cleaningType: cleaningTypes[0],
                    extras: [],
                    additional: ''
                })


                props.handleClose()
            }
        })
    }

    useEffect(() => {
        calculateTotal()
    }, [formValues, total])

    return (
        <div className="row booking-modal">
            <div className="col-md-8">
                <Form onSubmit={handleSubmit}>
                    <div className="first-block">
                        <h4 className="mb-3 step">1. Tell us about the cleaning</h4>

                        <div className="form-group mb-3 d-block d-md-flex justify-content-between align-items-center">
                            <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                            <select id="bedrooms" className="form-select"
                                value={formValues.bedrooms.id}
                                onChange={(e) => {
                                    setFormValues((prev) => {
                                        return {
                                            ...prev,
                                            bedrooms: bedrooms.filter(m => m.id == +e.target.value)[0]
                                        }
                                    })
                                }}
                            >
                                {bedrooms.map((item, index) => {
                                    return <option key={index} value={item.id}>{item.title}</option>
                                })}
                            </select>
                        </div>

                        <div className="form-group mb-3 d-block d-md-flex justify-content-between align-items-center">
                            <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
                            <select id="bathrooms" className="form-select"
                                value={formValues.bathrooms}
                                onChange={(e) => {
                                    setFormValues((prev) => ({
                                        ...prev,
                                        bathrooms: +e.target.value
                                    }))
                                }}
                            >
                                <option value="1">1 Bathroom</option>
                                <option value="2">2 Bathroom</option>
                                <option value="3">3 Bathroom</option>
                                <option value="4">4 Bathroom</option>
                            </select>
                        </div>

                        <div className="form-group d-block d-md-flex justify-content-between align-items-center">
                            <label htmlFor="cleaningType" className="form-label">Cleaning type</label>
                            <select id="cleaningType" className="form-select"
                                value={formValues.cleaningType.id}
                                onChange={(e) => {
                                    setFormValues((prev) => ({
                                        ...prev,
                                        cleaningType: cleaningTypes.filter(m => m.id == +e.target.value)[0]
                                    }))
                                }}
                            >
                                {
                                    cleaningTypes.map((item, index) => {
                                        return <option value={item.id} key={index}>{item.title}</option>
                                    })
                                }
                            </select>
                        </div>

                    </div>
                    <div className="second-step">
                        <h4 className="mb-3 step mt-5">2. Any Extras?</h4>

                        <div className="extras-container">
                            {
                                extras.map((extra, extra_index) => {
                                    return <BookingExtraItem
                                        key={extra_index}
                                        extra={extra}
                                        setFormValues={setFormValues}
                                        calculate={calculateTotal}
                                    />
                                })
                            }
                        </div>

                        <h5 className="mt-4 mb-0">
                            Are there any additional details we need to know?
                        </h5>
                        <p className="mb-1">
                            You can email us at {CONTACTS.emails.values[0]} with photos, floorplans or any other relevant information
                        </p>
                        <textarea className="form-control" placeholder="your comments"
                            value={formValues.additional} onChange={(e) => setFormValues((prev) => ({
                                ...prev,
                                additional: e.target.value
                            }))}
                        ></textarea>

                    </div>

                    <div className="third-step">
                        <h4 className="mb-3 step mt-5">3. How often would you like us to clean?</h4>
                        <p>Save With Our Cleany Loyalty Program! (Discount applied on 2nd cleaning and onward)</p>
                        <div className="d-flex" style={{ gap: 20 }}>

                            {
                                frequencies.map((item, index) => {
                                    return <div key={index}>
                                        <input type="radio" className="btn-check" name="frequency" id={"frequency-" + item.id} value={item.id} onChange={(e) => setTotal((prev) => ({
                                            ...prev,
                                            frequency: item
                                        }))} autoComplete="off" defaultChecked={total.frequency.id == item.id} />
                                        <label className="btn btn-outline-primary" htmlFor={"frequency-" + item.id}>{item.title}</label>
                                    </div>
                                })
                            }
                        </div>


                    </div>
                    <div className="third-step">
                        <h4 className="mb-3 step mt-5">4. Your contact information</h4>
                        <div className="form-group d-block d-md-flex mb-2">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" id="firstName"
                                placeholder="e.g., John"
                                required={true}
                                value={total.contacts.firstName}
                                onChange={(e) => setTotal((prev) => ({
                                    ...prev,
                                    contacts: {
                                        ...prev.contacts,
                                        firstName: e.target.value
                                    }
                                }))}
                                className="form-control" />
                        </div>
                        <div className="form-group d-block d-md-flex mb-2">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" id="lastName"
                                required={true}
                                placeholder="e.g., Smith"
                                value={total.contacts.lastName}
                                onChange={(e) => setTotal((prev) => ({
                                    ...prev,
                                    contacts: {
                                        ...prev.contacts,
                                        lastName: e.target.value
                                    }
                                }))}
                                className="form-control" />
                        </div>
                        <div className="form-group d-block d-md-flex mb-2">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email"
                                placeholder="e.g., john.smith@example.com"
                                required={true}
                                value={total.contacts.email}
                                onChange={(e) => setTotal((prev) => ({
                                    ...prev,
                                    contacts: {
                                        ...prev.contacts,
                                        email: e.target.value
                                    }
                                }))}
                                className="form-control" />
                        </div>
                        <div className="form-group d-block d-md-flex mb-2">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <Form.Control
                                id="phone"
                                type="text"
                                placeholder="e.g., +19296566456"
                                value={total.contacts.phone}
                                required={true}
                                as={ReactInputMask}
                                mask="(999) 999-9999"
                                onChange={(e) => setTotal((prev) => ({
                                    ...prev,
                                    contacts: {
                                        ...prev.contacts,
                                        phone: e.target.value
                                    }
                                }))}
                            />
                        </div>
                    </div>

                    <div className="fourth-step mb-5">
                        <h4 className="mb-3 step mt-5">5. Location of the home to be cleaned</h4>
                        <div className="form-group d-block d-md-flex mb-1">
                            <label htmlFor="address" className="form-label">Address line</label>
                            <input type="text" id="address"
                                required={true}
                                placeholder="Street/unit/apt/suite #"
                                value={total.contacts.address}
                                onChange={(e) => setTotal((prev) => ({
                                    ...prev,
                                    contacts: {
                                        ...prev.contacts,
                                        address: e.target.value
                                    }
                                }))}
                                className="form-control" />
                        </div>
                    </div>

                    <hr />
                    <h6 className="mt-5 text-center">
                        By completing this booking, <br /> I accept <a href="#">Brooklyn cleaning service Policy</a> and <a href="#">Terms Of Service</a>
                    </h6>

                    <Button className="mx-auto my-4 d-block" type="submit">Book now</Button>
                </Form>

            </div>
            <div className="col-md-4">
                <div className="booking-total">
                    <h3>Order summary</h3>
                    <ul className='list-group'>
                        <li className="list-group-item">
                            <p>Frequency</p>
                            <p>{total.frequency.title}</p>
                        </li>
                        <li className="list-group-item">
                            <p>Cleaning time</p>
                            <p>{formValues.bedrooms[formValues.cleaningType.title].time}</p>
                        </li>
                    </ul>
                    <hr />
                    <ul className="list-group">
                        <li className="list-group-item">
                            <p>Service</p>
                            <p>${total.service.toFixed(2)}</p>
                        </li>
                        <li className="list-group-item">
                            <p>Extras</p>
                            <p>${total.extras.toFixed(2)}</p>
                        </li>
                        <li className="list-group-item">
                            <p>Discount</p>
                            <p>${total.discount.toFixed(2)}</p>
                        </li>
                    </ul>
                    <hr />
                    <ul className="list-group">
                        <li className="list-group-item">
                            <p>Subtotal</p>
                            <p>${total.subTotal.toFixed(2)}</p>
                        </li>
                        <li className="list-group-item">
                            <p>Taxes</p>
                            <p>${total.taxes.toFixed(2)}</p>
                        </li>
                        <li className="list-group-item">
                            <h4>Total</h4>
                            <h4>${total.total.toFixed(2)}</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BookingForm