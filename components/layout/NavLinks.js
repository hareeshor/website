import Link from 'next/link';
import React from 'react';

const NavLinks = ({ extraClassName }) => {
    return (
        <ul className="navigation ${extraClassName}">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About</Link></li>
            <li className="dropdown"><Link href="/our-services">Services</Link>
                <ul>
                    <li><Link href="/our-services">Software Development</Link></li>
                    <li><Link href="/page-service-details">Mobile App Development</Link></li>
                    <li><Link href="/page-service-details">ERP Software</Link></li>
                    <li><Link href="/page-service-details">CRM Software</Link></li>
                    <li><Link href="/page-service-details">Cyber Security</Link></li>
                    <li><Link href="/page-service-details">Website Development</Link></li>
                </ul>
            </li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact-us">Contact</Link></li>
        </ul>
    );
};

export default NavLinks;