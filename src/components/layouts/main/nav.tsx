import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CONTACTS } from '../../../helpers/constants/contacts'
import BookingFormModal from '../../modals/Booking/BookingFormModal'
type Props = {}

function Nav({ }: Props) {
    return (
        <Navbar bg="light" variant="light" className='py-3 shadow-sm'>
            <Container>
                <Link to="/">
                    <div className='brand'>
                        <img src="/images/logo.png" alt="" />
                    </div>
                </Link>
                <div className="mx-auto no-mobile navbar-nav">

                    {/* address */}
                    <div className='nav-contact-item'>
                        <span dangerouslySetInnerHTML={{ __html: CONTACTS.locations.icon }}></span>
                        <div>
                            {
                                CONTACTS.locations.values.map((location, index) => {
                                    return <NavLink key={index} to={location.googleMapLink} className={'pb-0 nav-link'} target='_blank'> {location.addressLine}
                                    </NavLink>
                                })
                            }
                        </div>
                    </div>

                    {/* phones */}
                    <div className='nav-contact-item'>
                        <span dangerouslySetInnerHTML={{ __html: CONTACTS.phones.icon }}></span>
                        <div>
                            {
                                CONTACTS.phones.values.map((phone, index) => {
                                    return <NavLink key={index} to={'tel:+1' + phone.replace(/\D/g, '')} className={'pb-0 nav-link'} target='_blank'> {phone}
                                    </NavLink>
                                })
                            }
                        </div>
                    </div>

                    {/* emails */}
                    <div className='nav-contact-item'>
                        <span dangerouslySetInnerHTML={{ __html: CONTACTS.emails.icon }}></span>
                        <div>
                            {
                                CONTACTS.emails.values.map((email, index) => {
                                    return <NavLink key={index} to={'mailto:' + email} className={'pb-0 nav-link'} target='_blank'> {email}
                                    </NavLink>
                                })
                            }
                        </div>
                    </div>
                </div>
                <BookingFormModal />
            </Container>
        </Navbar>
    )
}

export default Nav