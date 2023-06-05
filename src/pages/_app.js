import 'witekkie/styles/globals.css'
import 'witekkie/assets/lib/fontawesome-free/css/all.min.css';
import 'witekkie/assets/css/bootstrap-icons.css';
// import 'witekkie/assets/lib/owlcarousel/owl.carousel.min';
import 'witekkie/assets/lib/animate/animate.min.css';
import 'witekkie/assets/css/bootstrap.min.css';
import 'witekkie/assets/css/style.css';
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Component {...pageProps} />
      </>
  )
}
