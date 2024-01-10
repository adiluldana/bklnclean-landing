import React, { Fragment } from 'react'
import Banner from '../../components/sections/home/index/Banner'
import WhyChooseUs from '../../components/sections/home/index/WhyChooseUs'
import WeAreInNumber from '../../components/sections/home/index/WeAreInNumber'
import HomeOfficeAppartment from '../../components/sections/home/index/HomeOfficeAppartment'
import ForCommercialClients from '../../components/sections/home/index/ForCommercialClients'
import ClientReviews from '../../components/sections/home/index/ClientReviews'

type Props = {}

const Index = (props: Props) => {
    return (
        <Fragment>
            <Banner />
            <WhyChooseUs />
            <WeAreInNumber />
            <HomeOfficeAppartment />
            <ForCommercialClients />
            <ClientReviews />
        </Fragment>
    )
}

export default Index