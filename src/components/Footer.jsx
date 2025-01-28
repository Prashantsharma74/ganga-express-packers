import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* Footer Start */}
            <div
                className="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
                data-wow-delay="0.1s"
                style={{ marginTop: "6rem" }}
            >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Address</h4>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt me-3" />
                                123 Street, New York, USA
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt me-3" />
                                +91 7470734508
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-envelope me-3" />
                                info@example.com
                            </p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-youtube" />
                                </a>
                                <a className="btn btn-outline-light btn-social" href="">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Services</h4>
                            <a className="btn btn-link" href="">
                                Air Freight
                            </a>
                            <a className="btn btn-link" href="">
                                Sea Freight
                            </a>
                            <a className="btn btn-link" href="">
                                Road Freight
                            </a>
                            <a className="btn btn-link" href="">
                                Logistic Solutions
                            </a>
                            <a className="btn btn-link" href="">
                                Industry solutions
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <Link className="btn btn-link" to="/about-us">
                                About Us
                            </Link>
                            <Link className="btn btn-link" to="/contact-us">
                                Contact Us
                            </Link>
                            <Link className="btn btn-link" to="/services">
                                Our Services
                            </Link>
                            <a className="btn btn-link" href="">
                                Terms &amp; Condition
                            </a>
                            <a className="btn btn-link" href="">
                                Support
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                                <input
                                    className="form-control border-0 w-100 py-3 ps-4 pe-5"
                                    type="text"
                                    placeholder="Your email"
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                                >
                                    SignUp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                ©{" "}
                                <a className="border-bottom" href="https://innovistasolutions.in/" target='_blank'  style={{color:"#ff3e41"}}>
                                    Innovista Solutions
                                </a>
                                , All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                Designed By{" "}
                                <a className="border-bottom" href="https://prashant-mern.netlify.app/" target='_blank'>
                                    Prashant Sharma
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>
    )
}

export default Footer