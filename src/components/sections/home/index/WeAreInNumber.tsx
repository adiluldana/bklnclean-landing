import React from 'react'

type Props = {}

interface INumberStatisticItem {
    number: number
    title: string
}

const WeAreInNumber = (props: Props) => {
    const list: INumberStatisticItem[] = [
        {
            number: 5,
            title: 'years<br/> on the market'
        },
        {
            number: 483,
            title: 'satisfied<br/> customers'
        },
        {
            number: 12,
            title: 'experienced<br/> professionals'
        },
        {
            number: 2,
            title: 'hours average<br/> cleaning time'
        }
    ]
    return (
        <section id="we-in-digits">
            <span className='d-none'>https://www.freepik.com/free-photo/top-view-hand-with-rubber-glove-cleaning_7945426.htm</span>
            <div className="container">
                <h3 className='section-title mb-5'>We are in numbers?</h3>

                <div className="row">
                    {
                        list.map((item, index) => {
                            return <div className='col-md-3' key={index}>
                                <div className="we-in-digits-item">
                                    <h2>{item.number}</h2>
                                    <p dangerouslySetInnerHTML={{ __html: item.title }}></p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default WeAreInNumber