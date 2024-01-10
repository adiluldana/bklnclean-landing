import React from 'react'

type Props = {}

interface IReason {
    img: string
    title: string
    text: string
    author: string
}

const WhyChooseUs = (props: Props) => {
    const list: IReason[] = [
        {
            img: '/images/icons/clock.png',
            title: 'Always on time',
            text: `Our cleaners are punctual. Just set the date and time and we'll be there.`,
            author: `<a href="https://www.flaticon.com/ru/free-icons/" title="Часы иконки">Часы иконки от afif fudin - Flaticon</a>`
        },
        {
            img: '/images/icons/workers.png',
            title: 'Proven employees',
            text: `All of our cleaners are trustworthy and professional.`,
            author: `Icon author: <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com'</a>`
        },
        {
            img: '/images/icons/diamond.png',
            title: 'Attentive to details',
            text: `We do clean as i promise making sure to leave no spot dirty.`,
            author: `<a href="https://www.flaticon.com/ru/free-icons/" title="алмаз иконки">Алмаз иконки от Freepik - Flaticon</a>`
        },
        {
            img: '/images/icons/discount.png',
            title: 'Big discounts',
            text: `Become our long-term client, and get amazing discount.`,
            author: `<a href="https://www.flaticon.com/ru/free-icons/-" title="торговля и покупки иконки">Торговля и покупки иконки от Design Circle - Flaticon</a>`
        },
        {
            img: '/images/icons/clean-products.png',
            title: 'Full security',
            text: `Our cleaners are always
            monitored while they're
            on duty.`,
            author: `<a href="https://www.flaticon.com/ru/free-icons/" title="безопасность иконки">Безопасность иконки от Tanah Basah - Flaticon</a>`
        },
        {
            img: '/images/icons/price-tag.png',
            title: 'Best price',
            text: `Our cleaning service is the most affordable in brooklyn.`,
            author: `<a href="https://www.flaticon.com/ru/free-icons/" title="ценник иконки">Ценник иконки от Fahmi Desain - Flaticon</a>`
        }
    ]
    return (
        <section id="why-us">
            <div className="container">
                <h3 className='section-title mb-5'>Why choose us?</h3>
                <div className="row">
                    {
                        list.map((item, index) => {
                            return <div className="col-md-4" key={index}>
                                <div className="why-us-item">
                                    <div className='why-us-img'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                    <span className="d-none" dangerouslySetInnerHTML={{ __html: item.author }}></span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs