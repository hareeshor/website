import Link from 'next/link';
import React from 'react';

const AboutOne = () => {
    return (
        <>
            <section className="about-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About Netvions Technology</span>
                                    <h2>Driving Innovation. Delivering Excellence.</h2>
                                    <div className="text">Netvions Technology is a UAE-based IT solutions provider committed to transforming businesses through next-generation technology. We specialize in building scalable, secure and smart digital solutions — from custom software and ERP systems to mobile apps and cybersecurity frameworks.</div>
                                </div>
                                <div className="content-box">
                                    <div className="info-box">
                                        <h5 className="title">Deep expertise across industries and tech stacks</h5>
                                        {/*<Link href="/#" className="read-more">More <i className="fa fa-long-arrow-alt-right" /></Link>*/}
                                    </div>
                                    <div className="about-block">
                                        <i className="icon flaticon-business-036-idea" />
                                        <h5 className="title">Our Vision </h5>
                                        <div className="text">To be a trusted technology partner driving business success through smart innovation.</div>
                                    </div>
                                    <div className="about-block">
                                        <i className="icon flaticon-business-034-directory" />
                                        <h5 className="title">Our Mission</h5>
                                        <div className="text">To deliver reliable, future-ready IT solutions that empower businesses and enhance user experiences.</div>
                                    </div>
                                </div>
                                {/*<div className="btm-box">*/}
                                {/*    <Link href="/about-us" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about-1.jpeg" title='Netvions' /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about-2.jpeg" title='Netvions' /></figure>
                                {/*<div className="experience bounce-y">*/}
                                {/*    <img src="/images/resource/image-1.jpg" title="Netvions" className="icon" />*/}
                                {/*    <strong>3600+</strong> Satisfied Client*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutOne;