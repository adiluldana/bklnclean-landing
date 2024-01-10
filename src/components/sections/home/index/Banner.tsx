import React from 'react'
import ConsultingForm from '../../../forms/ConsultingForm'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className="index-banner-container">
            <span dangerouslySetInnerHTML={{ __html: `<!-- https://www.videvo.net/video/close-up-view-of-cleaning-man-hands-carrying-cleaning-cart-inside-an-office-building/1115152/ -->` }}></span>
            <div id="index-banner" dangerouslySetInnerHTML={{
                __html:
                    `<video autoPlay loop muted>`
                    + `<source src="/videos/index-banner.webm" type="video/webm" />`
                    + `</video>`

            }}>
            </div>
            <div className="content">
                <div className="container">
                    <h1>Expert cleaning for NYC offices and homes, comfortable and spotless</h1>
                    <h3>Spotless spaces, happy faces!</h3>
                    <div className='d-flex mx-auto justify-content-center'>
                        <ConsultingForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner