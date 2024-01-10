import React from 'react'
import BookingFormModal from '../../../modals/Booking/BookingFormModal'
import { Col, Row } from 'react-bootstrap'
import OfficeBookingServicesModal from '../../../modals/OfficeBookingServicesModal'
import CommercialWithDiscountModal from '../../../modals/CommercialWithDiscountModal'

type Props = {}

const ForCommercialClients = (props: Props) => {

    return (
        <section id="office-services">
            <div className="filter">
                <div className="container">
                    <h2>For commercial clients</h2>
                    <h5 className="text-center my-5">
                        Maintaining the c leanl ines s of the fac i l it y and meeting it
                        s sanitar y and hygieni c requirement s are a mandator y element
                        of a pos iti ve image of any company and a condition for
                        maintaining human health.
                    </h5>
                    <div className="text-center">
                        <OfficeBookingServicesModal />
                    </div>

                    <h5 className="text-center my-4">
                        We value our long-term clients and provide them with the best
                        discounts.
                    </h5>
                    <Row className="mt-5">
                        <Col>
                            <div className="price-item">
                                <h2 style={{ fontSize: 26 }}>Let's click on the 'Make Service' button to calculate the cost of cleaning</h2>
                                <BookingFormModal />
                            </div>
                        </Col>
                        <Col>
                            <div className="price-item">
                                <h4>6 month contract</h4>
                                <p className="text-dark">discount</p>
                                <h2 className="discount">10% off</h2>
                                <CommercialWithDiscountModal discount={10} />
                            </div>
                        </Col>
                        <Col>
                            <div className="price-item">
                                <h4>1 year contract</h4>
                                <p className="text-dark">discount</p>
                                <h2 className="discount">20% off</h2>
                                <CommercialWithDiscountModal discount={20} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    )
}

export default ForCommercialClients