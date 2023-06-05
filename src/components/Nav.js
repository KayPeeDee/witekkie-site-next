import styled from 'styled-components';
import Link from "next/link";
import {useRouter} from "next/router";

const Wrapper = styled.div``

const WithCarousel = () => {
    return (
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: 900 + 'px'}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                            <a href="contact.html" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="/img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: 900 + 'px'}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

const WithoutCarousel = ({title, path}) => {
    return (
        <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: 90 + 'px'}}>
            <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 className="display-4 text-white animated zoomIn">{title}</h1>
                    <Link href="/" className="h5 text-white">Home</Link>
                    <i className="far fa-circle text-white px-2"></i>
                    <Link href={path} className="h5 text-white">{title}</Link>
                </div>
            </div>
        </div>
    );
}

const Nav = () => {
    const router = useRouter();
    let title;
    switch (router.pathname) {
        case '/':
            title = 'Home';
            break;
        case '/about':
            title = 'About';
            break;
        case '/contact':
            title = 'Contact';
            break;
        case '/pricing':
            title = 'Pricing';
            break;
        case '/services':
            title = 'Services';
            break;
        case '/shop':
            title = 'Shop';
            break;
        case '/blog':
            title = 'Blog';
            break;
        case '/quote':
            title = 'Free Quote'
            break;
    }
    let belowNavElement = router.pathname === '/' ? <WithCarousel/> : <WithoutCarousel title={title} path={router.pathname}/>;
    return (
        <>

            <div className="container-fluid bg-dark px-5 d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{height: 45 + 'px'}}>
                            <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>14 Hindhead Avenue, Chisipite, Harare, Zimbabwe</small>
                            <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+263 772 998 251</small>
                            <small className="text-light"><i className="fa fa-envelope-open me-2"></i>info@witekkie.com</small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{height: 45 + 'px'}}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i className="fab fa-youtube fw-normal"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                    <Link href="/" className="navbar-brand p-0">
                        <h1 className="m-0">
                            <i className="fa fa-globe-africa"></i>
                            WiTekkie
                        </h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link href="/" className={`nav-item nav-link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link>
                            <Link href="/about" className={`nav-item nav-link ${router.pathname === '/about' ? 'active' : ''}`}>About</Link>
                            <Link href="/services" className={`nav-item nav-link ${router.pathname === '/services' ? 'active' : ''}`}>Services</Link>
                            <Link href="/pricing" className={`nav-item nav-link ${router.pathname === '/pricing' ? 'active' : ''}`}>Pricing</Link>
                            <Link href="/shop" className={`nav-item nav-link ${router.pathname === '/shop' ? 'active' : ''}`}>Shop</Link>
                            <Link href="/blog" className={`nav-item nav-link ${router.pathname === '/blog' ? 'active' : ''}`}>Blog</Link>
                            <Link href="/contact" className={`nav-item nav-link ${router.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>

                        </div>
                        {/*<butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></butaton>*/}
                        <Link href="/quote" className="btn btn-primary py-2 px-4 ms-3">Request A Quote</Link>
                    </div>
                </nav>
                {belowNavElement}
            </div>

        </>
    )
}
export default Nav;