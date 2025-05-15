import Link from 'next/link';
import React from 'react';

const ServiceTwo = () => {
    return (
        <>
            <section className="services-section-two">
                <div className="auto-container">
                    <div className="row">
                        <div className="title-column col-lg-5 col-md-12">
                            <div className="sec-title light">
                                <span className="sub-title">What we offer</span>
                                <h2>Solving Complex Tech Challenges with Smart, Scalable Solutions</h2>
                                <Link href="/our-services" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                            </div>
                        </div>
                        <div className="services-column col-lg-7 col-md-12">
                            <div className="inner-column">
                                <div className="row">
                                    <div className="col">
                                        <div className="service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fa fa-globe" />
                                                <h6 className="title"><Link href="/page-service-details">Website Development</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fab fa-apple" />
                                                <h6 className="title"><Link href="/page-service-details">iOS App Development</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fab fa-android" />
                                                <h6 className="title"><Link href="/page-service-details">Android App Development</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="service-block-two">
                                            <div className="inner-box">
                                                <div className="icon fab fa-ioxhost" />
                                                <h6 className="title"><Link href="/page-service-details">ERP Solutions</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceTwo;