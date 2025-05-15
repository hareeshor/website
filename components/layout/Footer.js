import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import LogoWhite from './../../public/images/logo-white.png';
import LogoDark from './../../public/images/logo-2.png';

const Footer = () => {
    return (
        <>

            <footer className="main-footer">
                <div className="bg-image" style={{ backgroundImage: 'url(./images/background/footer.jpeg)' }} />
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><a href="/"><Image src={LogoWhite} title='Netvions Technology' /></a></div>
                                    <div className="text">Transforming Businesses Through Advanced Technology. From ERP systems to custom software development, we deliver innovation that drives growth.</div>
                                    <ul className="social-icon-two">
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest" /></a></li>
                                        <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h3 className="widget-title">Explore</h3>
                                    <ul className="user-links">
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Career</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms Of Service</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h3 className="widget-title">What we do</h3>
                                    <ul className="user-links">
                                        <li><a href="#">Software Development</a></li>
                                        <li><a href="#">Mobile App Development</a></li>
                                        <li><a href="#">ERP Software</a></li>
                                        <li><a href="#">CRM Software</a></li>
                                        <li><a href="#">Cyber Security</a></li>
                                        <li><a href="#">Website Development</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
                                    <h3 className="widget-title">Contact</h3>
                                    <div className="widget-content">
                                        <div className="text">66 Road Broklyn Street, 600 New York, USA</div>
                                        <ul className="contact-info">
                                            <li><i className="fa fa-envelope"/> <a
                                                href="mailto:needhelp@company.com">needhelp@company.com</a><br/></li>
                                            <li><i className="fa fa-phone-square"/> <a href="tel:+926668880000">+92 666
                                                888 0000</a><br/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">
                                © Copyright 2025 Netvions Technology. All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
};

export default Footer;