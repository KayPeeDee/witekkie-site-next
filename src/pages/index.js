import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'witekkie/styles/Home.module.css'
import React from 'react';
import Layout from 'witekkie/layouts/Main';

const inter = Inter({ subsets: ['latin'] })

const IndexPage = ({ title = 'This is our home page'}) =>
    <Layout>
        <div className="container-fluid facts py-5 pt-lg-0">
            <div className="container py-5 pt-lg-0">
                <div className="row gx-0">
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                        <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: 150 + 'px'}}>
                            <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: 60 + 'px', height: 60 + 'px'}}>
                                <i className="fa fa-phone-alt text-primary"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white mb-0">Call Us On</h5>
                                <h3 className="text-white mb-0">+263 772 998 251</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                        <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{height: 150 + 'px'}}>
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{width: 60 + 'px', height: 60 + 'px'}}>
                                <i className="fa fa-mail-bulk text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-primary mb-0">Email Us At</h5>
                                <h3 className="mb-0">info@witekkie.com</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                        <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: 150 + 'px'}}>
                            <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: 60  + 'px',  height: 60 + 'px'}}>
                                <i className="fab fa-whatsapp text-primary"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white mb-0">WhatsApp Us On</h5>
                                <h4 className="text-white mb-0">+263 772 998 251</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600 + 'px'}}>
                    <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
                    <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="fa fa-shield-alt text-white"></i>
                            </div>
                            <h4 className="mb-3">Custom Software Development</h4>
                            <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                            <a className="btn btn-lg btn-primary rounded" href="">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="fa fa-chart-pie text-white"></i>
                            </div>
                            <h4 className="mb-3">Web Development</h4>
                            <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                            <a className="btn btn-lg btn-primary rounded" href="">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="fa fa-code text-white"></i>
                            </div>
                            <h4 className="mb-3">Digital Marketing</h4>
                            <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                            <a className="btn btn-lg btn-primary rounded" href="">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="fab fa-android text-white"></i>
                            </div>
                            <h4 className="mb-3">Mobile Apps Development</h4>
                            <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                            <a className="btn btn-lg btn-primary rounded" href="">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="fa fa-search text-white"></i>
                            </div>
                            <h4 className="mb-3">Blockchain Development</h4>
                            <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                            <a className="btn btn-lg btn-primary rounded" href="">
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                        <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                            <h3 className="text-white mb-3">Call Us For Quote</h3>
                            <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                            <h2 className="text-white mb-0">+012 345 6789</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                            <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
                        </div>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                        <div className="row g-0 mb-3">
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                            </div>
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                                <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: 60 + 'px', height: 60 + 'px'}}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Call to ask any question</h5>
                                <h4 className="text-primary mb-0">+263 772 998 251</h4>
                            </div>
                        </div>
                        <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a>
                    </div>
                    <div className="col-lg-5" style={{minHeight: 500 + 'px'}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" style={{objectFit: 'cover'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600 + 'px'}}>
                    <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                    <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="row g-5">
                            <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: 60 + 'px', height: 60 + 'px'}}>
                                    <i className="fa fa-cubes text-white"></i>
                                </div>
                                <h4>Best In Industry</h4>
                                <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                            </div>
                            <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: 60 + 'px',  height: 60 + 'px'}}>
                                    <i className="fa fa-award text-white"></i>
                                </div>
                                <h4>Award Winning</h4>
                                <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight: 350 + 'px'}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="img/feature.jpg" style={{objectFit: 'cover'}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row g-5">
                            <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: 60 + 'px', height: 60 + 'px'}}>
                                    <i className="fa fa-users-cog text-white"></i>
                                </div>
                                <h4>Professional Staff</h4>
                                <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                            </div>
                            <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: 60 + 'px', height: 60 + 'px'}}>
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <h4>24/7 Support</h4>
                                <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600 + 'px'}}>
                    <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
                    <h1 className="mb-0">We are Offering Competitive Prices for Our Clients</h1>
                </div>
                <div className="row g-5">
                    <div className="col-12 wow zoomIn" data-wow-delay="0.3s">
                        <ul className="nav nav-pills mb-5 justify-content-center" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Web Design</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Mobile Apps</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Custom Software</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Digital Marketing</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                <div className="row g-0">
                                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                                        <div className="bg-light rounded">
                                            <div className="border-bottom py-4 px-5 mb-4">
                                                <h4 className="text-primary mb-1">Bronze Package</h4>
                                                <small className="text-uppercase">For Small Size Business</small>
                                            </div>
                                            <div className="p-5 pt-0">
                                                <h1 className="display-5 mb-3">
                                                    <small className="align-top" style={{fontSize: 22 + 'px', lineHeight: 45 + 'px'}}>$</small>450.00<small className="align-bottom" style={{fontSize: 16 + 'px', lineHeight: 40 + 'px'}}> USD</small>
                                                </h1>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Domain Registration / Transfer</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Website Hosting</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Emails (Hosting + Marketing)</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Predesigned Templates</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Custom Designed Templates</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Content Creation</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>SEO Optimisation</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Social Media (Integration + Marketing)</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>3rd Part API Integrations</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>SSL Certificates</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Backend API Development</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Database Design & Development</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Website Migrations</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Maintenance & Upgrades</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Support</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                                        <div className="bg-white rounded shadow position-relative" style={{zIndex: 1}}>
                                            <div className="border-bottom py-4 px-5 mb-4">
                                                <h4 className="text-primary mb-1">Silver Package</h4>
                                                <small className="text-uppercase">For Medium Size Business</small>
                                            </div>
                                            <div className="p-5 pt-0">
                                                <h1 className="display-5 mb-3">
                                                    <small className="align-top" style={{fontSize: 22 + 'px', lineHeight: 45 + 'px'}}>$</small>750.00<small className="align-bottom" style={{fontSize: 16 + 'px', lineHeight: 40 + 'px'}}> USD</small>
                                                </h1>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Domain Registration / Transfer</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Website Hosting</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Emails (Hosting + Marketing)</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Predesigned Templates</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Custom Designed Templates</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Content Creation</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>SEO Optimisation</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Social Media (Integration + Marketing)</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>3rd Part API Integrations</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>SSL Certificates</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Backend API Development</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Database Design & Development</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Website Migrations</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Maintenance & Upgrades</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Support</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                                        <div className="bg-light rounded">
                                            <div className="border-bottom py-4 px-5 mb-4">
                                                <h4 className="text-primary mb-1">Gold Package</h4>
                                                <small className="text-uppercase">For Large Size Business</small>
                                            </div>
                                            <div className="p-5 pt-0">
                                                <h1 className="display-5 mb-3">
                                                    <small className="align-top" style={{fontSize: 22 + 'px',  lineHeight: 45 + 'px'}}>$</small>1500.00+<small className="align-bottom" style={{fontSize: 16 + 'px', lineHeight: 40 + 'px'}}> USD</small>
                                                </h1>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Domain Registration / Transfer</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Website Hosting</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Emails (Hosting + Marketing)</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Predesigned Templates</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Custom Designed Templates</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Content Creation</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>SEO Optimisation</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Social Media (Integration + Marketing)</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>3rd Part API Integrations</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>SSL Certificates</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Backend API Development</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Database Design & Development</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Website Migrations</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Maintenance & Upgrades</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Support</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                                <div className="row g-0">
                                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                                        <div className="bg-light rounded">
                                            <div className="border-bottom py-4 px-5 mb-4">
                                                <h4 className="text-primary mb-1">Bronze Package</h4>
                                                <small className="text-uppercase">For Small Size Business</small>
                                            </div>
                                            <div className="p-5 pt-0">
                                                <h1 className="display-5 mb-3">
                                                    <small className="align-top" style={{fontSize: 22 + 'px', lineHeight: 45 + 'px'}}>$</small>3500.00<small className="align-bottom" style={{fontSize: 16 + 'px', lineHeight: 40 + 'px'}}> USD</small>
                                                </h1>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>iOS Native</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Android Native</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Cross Platform</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>USSD</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>3rd Part API Integration</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>API Development</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>App Migration</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Maintenance & Updates</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Support</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Scope</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Timelines</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                                        <div className="bg-white rounded shadow position-relative" style={{zIndex: 1}}>
                                            <div className="border-bottom py-4 px-5 mb-4">
                                                <h4 className="text-primary mb-1">Silver Package</h4>
                                                <small className="text-uppercase">For Medium Size Business</small>
                                            </div>
                                            <div className="p-5 pt-0">
                                                <h1 className="display-5 mb-3">
                                                    <small className="align-top" style={{fontSize: 22 + 'px', lineHeight: 45 + 'px'}}>$</small>7500.00<small className="align-bottom" style={{fontSize:  16 + 'px', lineHeight: 40 + 'px'}}> USD</small>
                                                </h1>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>iOS Native</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Android Native</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Cross Platform</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>USSD</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>3rd Part API Integration</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>API Development</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>App Migration</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Maintenance & Updates</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Support</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Scope</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Timelines</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                                        <div className="bg-light rounded">
                                            <div className="border-bottom py-4 px-5 mb-4">
                                                <h4 className="text-primary mb-1">Gold Package</h4>
                                                <small className="text-uppercase">For Large Size Business</small>
                                            </div>
                                            <div className="p-5 pt-0">
                                                <h1 className="display-5 mb-3">
                                                    <small className="align-top" style={{fontSize: 22 + 'px', lineHeight: 45 + 'px'}}>$</small>18000.00<small className="align-bottom" style={{fontSize: 16 + 'px', lineHeight: 40 + 'px'}}> USD</small>
                                                </h1>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>iOS Native</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Android Native</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Cross Platform</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>USSD</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>3rd Part API Integration</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>API Development</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>App Migration</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Maintenance & Updates</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Support</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Scope</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Timelines</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                                <div className="row g-0">
                                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                                        <div className="bg-light rounded">
                                            <div className="border-bottom py-4 px-5 mb-4">
                                                <h4 className="text-primary mb-1">Bronze</h4>
                                                <small className="text-uppercase">For Small Size Business</small>
                                            </div>
                                            <div className="p-5 pt-0">
                                                <h1 className="display-5 mb-3">
                                                    <small className="align-top" style={{fontSize: 22 + 'px', lineHeight: 45 + 'px'}}>$</small>4500.00<small className="align-bottom" style={{fontSize: 16 + 'px', lineHeight: 40 + 'px'}}> USD</small>
                                                </h1>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Requirements Specification</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Requirements Analysis</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>System Modelling</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>System Design</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Code Construction</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Maintenance & Updates</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Support</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                                        <div className="bg-white rounded shadow position-relative" style={{zIndex: 1}}>
                                            <div className="border-bottom py-4 px-5 mb-4">
                                                <h4 className="text-primary mb-1">Silver Package</h4>
                                                <small className="text-uppercase">For Medium Size Business</small>
                                            </div>
                                            <div className="p-5 pt-0">
                                                <h1 className="display-5 mb-3">
                                                    <small className="align-top" style={{fontSize: 22 + 'px', lineHeight: 45 + 'px'}}>$</small>10000.00<small className="align-bottom" style={{fontSize: 16 + 'px', lineHeight: 40 + 'px'}}> USD</small>
                                                </h1>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Requirements Specification</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Requirements Analysis</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>System Modelling</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>System Design</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Code Construction</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Maintenance & Updates</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Support</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                                        <div className="bg-light rounded">
                                            <div className="border-bottom py-4 px-5 mb-4">
                                                <h4 className="text-primary mb-1">Gold Package</h4>
                                                <small className="text-uppercase">For Large Size Business</small>
                                            </div>
                                            <div className="p-5 pt-0">
                                                <h1 className="display-5 mb-3">
                                                    <small className="align-top" style={{fontSize: 22 + 'px', lineHeight: 45 + 'px'}}>$</small>25000.00<small className="align-bottom" style={{fontSize: 16+ 'px',  lineHeight: 40 + 'px'}}> USD</small>
                                                </h1>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Requirements Specification</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Requirements Analysis</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>System Modelling</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>System Design</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Code Construction</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Maintenance & Updates</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Support</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">
                                <div className="row g-0">
                                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                                        <div className="bg-light rounded">
                                            <div className="border-bottom py-4 px-5 mb-4">
                                                <h4 className="text-primary mb-1">Bronze Package</h4>
                                                <small className="text-uppercase">For Small Size Business</small>
                                            </div>
                                            <div className="p-5 pt-0">
                                                <h1 className="display-5 mb-3">
                                                    <small className="align-top" style={{fontSize: 22 + 'px', lineHeight: 45 + 'px'}}>$</small>250.00<small className="align-bottom" style={{fontSize: 16 + 'px', lineHeight: 40 + 'px'}}> / Month</small>
                                                </h1>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Facebook Boosts</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Twitter</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>LinkedIn</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Instagram</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Tiktok</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>WhatsApp</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Youtube</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>SEO Optimisation</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Search Marketing</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Google Ads</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Email Marketing</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Graphics</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Videos</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Content Creation</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                                        <div className="bg-white rounded shadow position-relative" style={{zIndex: 1}}>
                                            <div className="border-bottom py-4 px-5 mb-4">
                                                <h4 className="text-primary mb-1">Silver Package</h4>
                                                <small className="text-uppercase">For Medium Size Business</small>
                                            </div>
                                            <div className="p-5 pt-0">
                                                <h1 className="display-5 mb-3">
                                                    <small className="align-top" style={{fontSize: 22 + 'px', lineHeight: 45 + 'px'}}>$</small>500.00<small className="align-bottom" style={{fontSize: 16 + 'px', lineHeight: 40 + 'px'}}> / Month</small>
                                                </h1>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Facebook Boosts</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Twitter</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>LinkedIn</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Instagram</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Tiktok</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>WhatsApp</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Youtube</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>SEO Optimisation</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Search Marketing</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Google Ads</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Email Marketing</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Graphics</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Videos</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Content Creation</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                                        <div className="bg-light rounded">
                                            <div className="border-bottom py-4 px-5 mb-4">
                                                <h4 className="text-primary mb-1">Gold Package</h4>
                                                <small className="text-uppercase">For Large Size Business</small>
                                            </div>
                                            <div className="p-5 pt-0">
                                                <h1 className="display-5 mb-3">
                                                    <small className="align-top" style={{fontSize: 22 + 'px', lineHeight: 45 + 'px'}}>$</small>750.00<small className="align-bottom" style={{fontSize: 16 + 'px', lineHeight: 40 + 'px'}}> / Month</small>
                                                </h1>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Facebook Boosts</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Twitter</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>LinkedIn</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Instagram</span><i className="fa fa-check text-primary pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Tiktok</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>WhatsApp</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Youtube</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>SEO Optimisation</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Search Marketing</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Google Ads</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Email Marketing</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Graphics</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Videos</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <div className="d-flex justify-content-between mb-3">
                                                    <span>Content Creation</span><i className="fa fa-times text-danger pt-1"></i>
                                                </div>
                                                <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
                            <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
                        </div>
                        <div className="row gx-3">
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
                            </div>
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                            </div>
                        </div>
                        <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                        <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: 60 + 'px', height: 60 + 'px'}}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Call to ask any question</h5>
                                <h4 className="text-primary mb-0">+012 345 6789</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-xl-12">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height: 55 + 'px'}} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{height: 55 + 'px'}} />
                                    </div>
                                    <div className="col-12">
                                        <select className="form-select bg-light border-0" style={{height: 55 + 'px'}}>
                                            <option selected>Select A Service</option>
                                            <option value="1">Service 1</option>
                                            <option value="2">Service 2</option>
                                            <option value="3">Service 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control bg-light border-0" rows="3" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*<div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">*/}
        {/*    <div className="container py-5">*/}
        {/*        <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{maxWidth: 600 + 'px'}}>*/}
        {/*            <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>*/}
        {/*            <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>*/}
        {/*        </div>*/}
        {/*        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">*/}
        {/*            <div className="testimonial-item bg-light my-4">*/}
        {/*                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">*/}
        {/*                    <img className="img-fluid rounded" src="img/testimonial-1.jpg" style={{width: 60 + 'px', height: 60 + 'px'}} />*/}
        {/*                    <div className="ps-4">*/}
        {/*                        <h4 className="text-primary mb-1">Client Name</h4>*/}
        {/*                        <small className="text-uppercase">Profession</small>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className="pt-4 pb-5 px-5">*/}
        {/*                    Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="testimonial-item bg-light my-4">*/}
        {/*                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">*/}
        {/*                    <img className="img-fluid rounded" src="img/testimonial-2.jpg" style={{width: 60 + 'px', height: 60 + 'px'}} />*/}
        {/*                    <div className="ps-4">*/}
        {/*                        <h4 className="text-primary mb-1">Client Name</h4>*/}
        {/*                        <small className="text-uppercase">Profession</small>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className="pt-4 pb-5 px-5">*/}
        {/*                    Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="testimonial-item bg-light my-4">*/}
        {/*                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">*/}
        {/*                    <img className="img-fluid rounded" src="img/testimonial-3.jpg" style={{width: 60 + 'px', height: 60 + 'px'}} />*/}
        {/*                    <div className="ps-4">*/}
        {/*                        <h4 className="text-primary mb-1">Client Name</h4>*/}
        {/*                        <small className="text-uppercase">Profession</small>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className="pt-4 pb-5 px-5">*/}
        {/*                    Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="testimonial-item bg-light my-4">*/}
        {/*                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">*/}
        {/*                    <img className="img-fluid rounded" src="img/testimonial-4.jpg" style={{width: 60 + 'px', height: 60 + 'px'}} />*/}
        {/*                    <div className="ps-4">*/}
        {/*                        <h4 className="text-primary mb-1">Client Name</h4>*/}
        {/*                        <small className="text-uppercase">Profession</small>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className="pt-4 pb-5 px-5">*/}
        {/*                    Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600 + 'px'}}>
                    <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
                    <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                                <div className="team-social">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h4 className="text-primary">Full Name</h4>
                                <p className="text-uppercase m-0">Designation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                                <div className="team-social">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h4 className="text-primary">Full Name</h4>
                                <p className="text-uppercase m-0">Designation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                        <div className="team-item bg-light rounded overflow-hidden">
                            <div className="team-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/team-3.jpg" alt=""/>
                                <div className="team-social">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-twitter fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-instagram fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h4 className="text-primary">Full Name</h4>
                                <p className="text-uppercase m-0">Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600 + 'px'}}>
                    <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
                    <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="img/blog-1.jpg" alt=""/>
                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h4 className="mb-3">How to build a website</h4>
                                <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="img/blog-2.jpg" alt=""/>
                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h4 className="mb-3">How to build a website</h4>
                                <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <img className="img-fluid" src="img/blog-3.jpg" alt=""/>
                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Web Design</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>John Doe</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h4 className="mb-3">How to build a website</h4>
                                <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                                <a className="text-uppercase" href="">Read More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*<div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">*/}
        {/*    <div className="container py-5 mb-5">*/}
        {/*        <div className="bg-white">*/}
        {/*            <div className="owl-carousel vendor-carousel">*/}
        {/*                <img src="img/vendor-1.jpg" alt="" />*/}
        {/*                <img src="img/vendor-2.jpg" alt=""/>*/}
        {/*                <img src="img/vendor-3.jpg" alt=""/>*/}
        {/*                <img src="img/vendor-4.jpg" alt=""/>*/}
        {/*                <img src="img/vendor-5.jpg" alt=""/>*/}
        {/*                <img src="img/vendor-6.jpg" alt=""/>*/}
        {/*                <img src="img/vendor-7.jpg" alt=""/>*/}
        {/*                <img src="img/vendor-8.jpg" alt=""/>*/}
        {/*                <img src="img/vendor-9.jpg" alt=""/>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

    </Layout>

export default IndexPage;