import "swiper/css";
import "swiper/css/navigation";

import '../public/css/bootstrap.min.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp
