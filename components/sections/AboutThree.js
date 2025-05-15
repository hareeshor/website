import Link from 'next/link';
import React from 'react';

const AboutThree = () => {
    return (
        <>

            <section className="about-section-three">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About us</span>
                                    <h2>Empowering your business with cutting-edge IT solutions</h2>
                                    <h5>Netvions Technology</h5>
                                    <div className="text">Founded with a vision to provide cutting-edge technology solutions to businesses in UAE and beyond. Our team of experienced professionals combines technical expertise with business acumen to deliver solutions that drive growth, efficiency, and innovation..</div>
                                </div>
                                <div className="content-box">
                                    <div className="row">
                                        <div className="about-block-three col-lg-6 col-md-6 col-sm-12">
                                            <h5 className="title"><i className="icon fa fa-arrow-alt-circle-right" /> Future-Proof</h5>
                                            <p className="text">Our systems are designed to grow with your business, supporting long-term scalability and performance.</p>
                                        </div>
                                        <div className="about-block-three col-lg-6 col-md-6 col-sm-12">
                                            <h5 className="title"><i className="icon fa fa-arrow-alt-circle-right" />Dedicated Support </h5>
                                            <p className="text">Responsive and reliable customer support, based in the UAE, to assist you every step of the way.</p>
                                        </div>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="/about-us" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about1.jpeg" title='Netvions Technology' /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about2.jpeg" title='Netvions Technology' /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutThree;