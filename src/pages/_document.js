import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import {useEffect} from "react";
// import WOW from 'wowjs';

export default function Document() {

    useEffect(()=>{
        window.WOW = require('wowjs');
        new WOW.WOW({ live: true }).init();
    },[])

    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
          <body>
            <Main />
            <NextScript />
            <Script src="/lib/jquery.min.js" strategy={'beforeInteractive'}/>
            <Script src="/lib/bootstrap.bundle.min.js" strategy={'beforeInteractive'}/>
            <Script src="/lib/wow/wow.min.js" strategy={'beforeInteractive'}/>
            <Script src="/lib/easing/easing.min.js" strategy={'beforeInteractive'}/>
            <Script src="/lib/waypoints/waypoints.min.js" strategy={'beforeInteractive'}/>
            <Script src="/lib/counterup/counterup.min.js" strategy={'beforeInteractive'}/>
            <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy={'beforeInteractive'}/>
            <Script src="/js/main.js" strategy={'afterInteractive'}/>
          </body>
        </Html>
    )
}
