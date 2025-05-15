import Link from 'next/link';
import React from 'react';

const AboutFour = () => {
    return (
        <>
            <section className="about-section-four">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">WHAT SETS US APART</span>
                                    <h2>Shaping the Future of IT Innovation</h2>
                                    <div className="text">At Netvions Technology, we don’t just follow trends — we help define them. With a focus on cutting-edge software, business automation, and cybersecurity, we empower organizations across the UAE to achieve digital excellence.</div>
                                </div>
                                <blockquote className="blockquote-style-one">Your Trusted Partner for ERP, CRM, Custom Software & Security Solutions.</blockquote>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <span className="float-text">Netvions</span>
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about-7.jpeg" title='Netvions' /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about-8.jpeg" title='Netvions' /></figure>
                                <div className="icon-box"><img src="/images/resource/icon-logo-2.png" title='Netvions' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutFour;