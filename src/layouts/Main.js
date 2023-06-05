import Head from "next/head";
import Nav from "witekkie/components/Nav";
import Footer from "witekkie/components/Footer";
import Wrapper from "witekkie/layouts/Wrapper";
import TopBar from "witekkie/components/TopBar";

export default ({ children, title = 'Witekkie Business Solutions'}) => (
    <>
        <Head>
            <title>{ title }</title>
        </Head>
        <Nav />
        { children }
        <Footer/>
    </>
);