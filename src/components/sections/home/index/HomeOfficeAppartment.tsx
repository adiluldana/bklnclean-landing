import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {}

interface ICleaningSlideItem {
    img: string
    title: string
    text: string
    author: string
}

const HomeOfficeAppartment = (props: Props) => {
    const list: ICleaningSlideItem[] = [
        {
            img: "/images/rt-house.webp",
            title: "Commercial & Office cleaning services",
            text: "Maintain a pristine commercial environment with our skilled and dedicated team. From daily upkeep to monthly maintenance, we provide customized cleaning packages tailored to your needs. Get in touch with us now to receive a personalized quote.",
            author:
                'Image by <a href="https://www.freepik.com/free-photo/full-shot-woman-cleaning-home_43700402.htm#page=2&query=cleaning&position=27&from_view=search&track=sph#position=27&page=2&query=cleaning">Freepik</a>',
        },
        {
            img: "/images/rt-floors.webp",
            title: "House cleaning",
            text: "Let us take care of your cleaning chores, so you can relax and enjoy your free time",
            author:
                'Image by <a href="https://www.freepik.com/free-photo/full-shot-man-cleaning-indoors_43700603.htm#page=4&query=cleaning&position=11&from_view=search&track=sph">Freepik</a>',
        },
        {
            img: "/images/rt-bathroom.webp",
            title: "Deep Cleaning",
            text: "Enhance your home cleaning experience with our comprehensive deep cleaning package. Our meticulous team covers every nook and cranny, ensuring a thorough clean both inside and outside of your living spaces. From top to bottom, we leave no area untouched",
            author:
                '<a href="https://www.freepik.com/free-photo/young-dark-haired-woman-cleaning-lamp-kitchen_22706382.htm#query=cleaning&position=16&from_view=search&track=sph">Image by zinkevych</a> on Freepik',
        },
        {
            img: "/images/rt-airbnb.webp",
            title: "AIRBNB & Vacation Rental",
            text: "We will clean and maintain your vacation home for your valued guests and tenants. Let us manage and service your properties while you save time and earn more",
            author:
                'Image by <a href="https://www.freepik.com/free-photo/person-taking-care-office-cleaning_25219958.htm#query=cleaning&position=37&from_view=search&track=sph">Freepik</a>',
        },
        {
            img: "/images/rt-moving.webp",
            title: "Move in Out Cleaning Service",
            text: `Our Cleany team will transform your new home into a stunning space. If you're moving, we'll ensure the place looks even better than when you first arrived`,
            author:
                'Image by <a href="https://www.freepik.com/free-photo/person-taking-care-office-cleaning_25219958.htm#query=cleaning&position=37&from_view=search&track=sph">Freepik</a>',
        },
        {
            img: "/images/rt-event.webp",
            title: "Event Cleaning Services",
            text: `Make your holiday stress-free with our pre and post-event cleaning service. We'll handle the cleaning before and after your celebration, leaving your space immaculate and ready for enjoyment`,
            author:
                'Image by <a href="https://www.freepik.com/free-photo/person-taking-care-office-cleaning_25219958.htm#query=cleaning&position=37&from_view=search&track=sph">Freepik</a>',
        },
    ];
    return (
        <section id="room-elements">
            <div className="container">
                <h3 className="section-title mb-5">
                    Home&nbsp;
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    &nbsp; Office&nbsp;
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    &nbsp; Appartment
                </h3>
                <div className="no-mobile">
                    <Swiper spaceBetween={30} slidesPerView={4}>
                        {list.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div
                                        className="room-elements-item"
                                        style={{
                                            backgroundImage: `url('${item.img}')`,
                                            borderTopLeftRadius: index === 0 ? "30px" : "0",
                                            borderBottomLeftRadius: index === 0 ? "30px" : "0",
                                            borderTopRightRadius: index === 3 ? "30px" : "0",
                                            borderBottomRightRadius: index === 3 ? "30px" : "0",
                                        }}
                                    >
                                        <span
                                            className="d-none"
                                            data-meta="author-link"
                                            dangerouslySetInnerHTML={{ __html: item.author }}
                                        ></span>
                                        <div className="content">
                                            <h4>{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="no-desktop">
                    <Swiper spaceBetween={10} slidesPerView={1}>
                        {list.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div
                                        className="room-elements-item"
                                        style={{
                                            backgroundImage: `url('${item.img}')`,
                                            borderTopLeftRadius: index === 0 ? "30px" : "0",
                                            borderBottomLeftRadius: index === 0 ? "30px" : "0",
                                            borderTopRightRadius: index === 3 ? "30px" : "0",
                                            borderBottomRightRadius: index === 3 ? "30px" : "0",
                                        }}
                                    >
                                        <span
                                            className="d-none"
                                            data-meta="author-link"
                                            dangerouslySetInnerHTML={{ __html: item.author }}
                                        ></span>
                                        <div className="content">
                                            <h4>{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <p className="mt-4 text-center">
                    We provide high-quality cleaning services that cover every aspect of
                    your living space. Our team of experienced professionals will
                    meticulously clean your apartment, ensuring impeccable cleanliness in
                    every corner. We not only tidy up the floors and bathroom but also
                    bring a radiant shine to your home with spotless windows. Trust us,
                    and we are confident that you will be satisfied with our work.
                </p>
            </div>
        </section>
    )
}

export default HomeOfficeAppartment