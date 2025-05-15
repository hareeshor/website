import Link from 'next/link';
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const IntroSlider1 = () => {

    const [isOpen, setOpen] = useState(false)


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                // breakpoints={{
                //     320: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     575: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     767: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     991: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                //     1199: {
                //         slidesPerView: 4,
                //         spaceBetween: 30,
                //     },
                //     1350: {
                //         slidesPerView: 5,
                //         spaceBetween: 30,
                //     },
                // }}
                className="project-carousel"
            >
                {/* {data.map((item, i) => ( */}
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/erp.jpeg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1">Streamline your operations with our fully customizable ERP software</span>
                                <h1 className="title animate-2">ERP Software Solutions</h1>
                                <div className="btn-box animate-3">
                                    <Link href="/about-us" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/cyber-security.jpeg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1">Protect your digital assets with real-time monitoring, threat detection and proactive defense systems</span>
                                <h1 className="title animate-2">Cyber Security Services</h1>
                                <div className="btn-box animate-3">
                                    <Link href="/about-us" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/software-development.jpeg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <span className="sub-title animate-1">We build scalable, secure and user-friendly software tailored to your business needs — from startups to enterprises.</span>
                                <h1 className="title animate-2">Custom Software Development Services</h1>
                                <div className="btn-box animate-3">
                                    <Link href="/about-us" className="theme-btn btn-style-one"><span className="btn-title">Explore More</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* ))} */}
            </Swiper>


            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};

export default IntroSlider1;

