import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,

            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    const [isSubActive, setSubIsActive] = useState({
        status: false,
        key: "",
    });

    const handleSubClick = (key) => {
        if (isSubActive.key === key) {
            setSubIsActive({
                status: false,

            });
        } else {
            setSubIsActive({
                status: true,
                key,
            });
        }
    };



    return (
        <>
            <ul className="navigation clearfix">

                <li class="current dropdown"><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About</Link></li>
                <li class="dropdown"><Link href="/about-us">Pages</Link>
                    <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
                        <li class="dropdown"><Link href="/page-projects">Projects</Link>
                        <ul className={isSubActive.key === 234 ? "d-block" : "d-none"}>
                                <li><Link href="/page-projects">Projects Grid</Link></li>
                                <li><Link href="/page-project-details">Project Details</Link></li>
                            </ul>
                            <div className={isSubActive.key === 234 ? "dropdown-btn active" : "dropdown-btn"}
                                onClick={() => handleSubClick(234)}><i class="fa fa-angle-down"></i></div></li>
                        <li class="dropdown"><Link href="/page-team">Team</Link>
                        <ul className={isSubActive.key === 23 ? "d-block" : "d-none"}>
                                <li><Link href="/page-team">Team Grid</Link></li>
                                <li><Link href="/page-team-details">Team Details</Link></li>
                            </ul>
                            <div className={isSubActive.key === 23 ? "dropdown-btn active" : "dropdown-btn"}
                                onClick={() => handleSubClick(23)}><i class="fa fa-angle-down"></i></div></li>
                        <li><Link href="/page-testimonial">Testimonial</Link></li>
                        <li><Link href="/page-pricing">Pricing</Link></li>
                        <li><Link href="/page-faq">FAQ</Link></li>
                        <li><Link href="/page-404">Page 404</Link></li>
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i class="fa fa-angle-down"></i></div></li>
                <li class="dropdown"><Link href="/our-services">Services</Link>
                    <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
                        <li><Link href="/our-services">Services Grid</Link></li>
                        <li><Link href="/page-service-details">Service Details</Link></li>
                    </ul>
                    <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}><i class="fa fa-angle-down"></i></div></li>
                <li class="dropdown"><Link href="/#">News</Link>
                    <ul className={isActive.key === 5 ? "d-block" : "d-none"}>
                        <li><Link href="/news-grid">News Grid</Link></li>
                        <li><Link href="/news-details">News Details</Link></li>
                    </ul>
                    <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)}><i class="fa fa-angle-down"></i></div></li>
                <li><Link href="/contact-us">Contact</Link></li>
            </ul>


        </>
    );
};

export default MobileMenu;