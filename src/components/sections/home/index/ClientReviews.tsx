import React from 'react'
import { Container } from 'react-bootstrap'
import { SwiperSlide, Swiper } from 'swiper/react'

type Props = {}

interface IReview {
    profile_photo_url: string
    text: string
    author_name: string
}

const ClientReviews = (props: Props) => {

    const reviews: IReview[] = [
        {
            profile_photo_url: 'https://lh3.googleusercontent.com/a/ACg8ocK9KDL-iQ2jrMIOSHODNZMbsvs4DuTTTnAakRfITYH6=w36-h36-p-rp-mo-br100',
            text: `Hello Emma! I'm doing great, how are you?! I wanted to thank you for giving us such an AMAZING experience this week. Your driver, Elmira, was the most efficient person I've ever seen. I bragged about her to my friends and family, she was extremely detailed protected and confident. Very professional. The cleaning ladies were also the best I've ever had. Everything was spotless, super impressed with how efficient and quick they worked out home and we definitely will be utilizing your services again. Routinely. I'll be spreading the word for sure. But please, thank them for me. I sent over additional funds as a lil tip, but I'm Soooo happy we bumped into you. I love how structured you work.`,
            author_name: 'Pamela Green'
        },
        {
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjVEfxJ5EQFKbBK2TUS2VF25U4RrCk8xVJXWLJVcecF2sXo=s128-c0x00000000-cc-rp-mo',
            text: `I had a fantastic experience with Brooklyn Cleaning Service. They cleaned my 3-bedroom, 3-bathroom apartment thoroughly and left it sparkling. The service was truly wonderful - efficient, courteous, and attentive to detail. What's even more appealing is their affordable pricing. Supporting a local business is always a plus, and knowing that it's owned by a Kazakh mother of three kids adds a heartwarming touch to the service. I can't recommend them enough – a solid 5 stars!`,
            author_name: 'Gani Stambek'
        },
        {
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjW97NMcrtL8dC7RXWN3TdNOmO6KGwg3ofqib_0YHQYwvGQ=s128-c0x00000000-cc-rp-mo',
            text: `Excellent cleaning service. They are very thorough and professional I have used this service twice and will be using them again. It is affordable and you get a deep, thorough cleaning - they are on time and communicate clearly. And they take pride in their work! I am truly happy!
    
          `,
            author_name: 'Geraldine Aine'
        },
        {
            profile_photo_url: 'https://lh3.googleusercontent.com/a/ACg8ocJ_Ynyhw4i7GXDo4juMieERTHn8iV7CIQf-5_d2ExF9=s128-c0x00000000-cc-rp-mo',
            text: `Amazing cleaning service! I’ve used them several times already, and each time they leave my home spotless. They’re very professional, punctual, and complete everything they’re asked. Highly recommend them!`,
            author_name: 'Roza Shamailova'
        },
        {
            profile_photo_url: 'https://lh3.googleusercontent.com/a/ACg8ocLGHyK_CFb0iILRaYBu-rWlKgymDyYOnuMj_WkBhQNJ=s128-c0x00000000-cc-rp-mo',
            text: `Very professional and affordable. I have my house cleaned every 2 weeks and they are always on time super friendly. I’m almost 7 months pregnant with 2 toddlers and things get crazy quick in my house so i need extra help cleaning up and this company never disappoints. I’m always satisfied when they leave and my house feels fresh and clean when are done so i highly recommend this company. They are trustworthy and very reliable so I’m definitely a forever customer`,
            author_name: 'Tanesha Tripline'
        },
        {
            profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjUfTXrldMyr4vePPOpnenm1gT-LgQ30rxytvIqRpK9rNLo=s128-c0x00000000-cc-rp-mo',
            text: `I’ve been using this company for 3 months now and intend to keep using them for the foreseeable future. Very hard workers and they get the job done. Finding reliable cleaners is harder than you might expect, they’re a lil pricier than the competition but they do the job right. Highly recommend.`,
            author_name: 'Kevin Molduene'
        }
    ]

    return (
        <section id="rewiews">
            <Container>
                <h3 className="section-title mb-5">What our clients say about us</h3>
                <Swiper spaceBetween={30} slidesPerView={"auto"}>
                    {reviews.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="rewiev-item">
                                    <img width={50} className="mb-3" src="/images/quotes.png" alt="" />
                                    <p>{item.text}</p>
                                    <div className="d-flex align-items-center" style={{ gap: 20 }}>
                                        <img className="user-photo" src={item.profile_photo_url} alt="" />
                                        <h5 className="mb-0">{item.author_name}</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Container>
        </section>
    )
}

export default ClientReviews