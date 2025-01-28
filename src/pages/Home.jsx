import React, { useEffect } from 'react'
import Carousel from '../components/Home/Carousel'
import About from '../components/Home/About'
import Testimonials from '../components/Home/Testimonials'
import Team from '../components/Home/Team'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Carousel />
            <About />
            {/* Fact Start */}
            <div className="container-xxl">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
                            <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
                            <p className="mb-5">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <div className="d-flex align-items-center">
                                <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white" />
                                <div className="ps-4">
                                    <h6>Call for any query!</h6>
                                    <h3 className="text-primary m-0">+012 345 6789</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4 align-items-center">
                                <div className="col-sm-6">
                                    <div
                                        className="bg-primary p-4 mb-4 wow fadeIn"
                                        data-wow-delay="0.3s"
                                    >
                                        <i className="fa fa-users fa-2x text-white mb-3" />
                                        <h2 className="text-white mb-2" data-toggle="counter-up">
                                            1234
                                        </h2>
                                        <p className="text-white mb-0">Happy Clients</p>
                                    </div>
                                    <div
                                        className="bg-secondary p-4 wow fadeIn"
                                        data-wow-delay="0.5s"
                                    >
                                        <i className="fa fa-ship fa-2x text-white mb-3" />
                                        <h2 className="text-white mb-2" data-toggle="counter-up">
                                            1234
                                        </h2>
                                        <p className="text-white mb-0">Complete Shipments</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="bg-success p-4 wow fadeIn" data-wow-delay="0.7s">
                                        <i className="fa fa-star fa-2x text-white mb-3" />
                                        <h2 className="text-white mb-2" data-toggle="counter-up">
                                            1234
                                        </h2>
                                        <p className="text-white mb-0">Customer Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fact End */}
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container py-5">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-secondary text-uppercase">Our Services</h6>
                        <h1 className="mb-5">Explore Our Services</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/asstes/img/service-1.jpg" alt="" />
                                </div>
                                <h4 className="mb-3">Air Freight</h4>
                                <p>
                                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                                    diam.
                                </p>
                                <a className="btn-slide mt-2" href="">
                                    <i className="fa fa-arrow-right" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/service-2.jpg" alt="" />
                                </div>
                                <h4 className="mb-3">Ocean Freight</h4>
                                <p>
                                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                                    diam.
                                </p>
                                <a className="btn-slide mt-2" href="">
                                    <i className="fa fa-arrow-right" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/service-3.jpg" alt="" />
                                </div>
                                <h4 className="mb-3">Road Freight</h4>
                                <p>
                                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                                    diam.
                                </p>
                                <a className="btn-slide mt-2" href="">
                                    <i className="fa fa-arrow-right" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/service-4.jpg" alt="" />
                                </div>
                                <h4 className="mb-3">Train Freight</h4>
                                <p>
                                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                                    diam.
                                </p>
                                <a className="btn-slide mt-2" href="">
                                    <i className="fa fa-arrow-right" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/service-5.jpg" alt="" />
                                </div>
                                <h4 className="mb-3">Customs Clearance</h4>
                                <p>
                                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                                    diam.
                                </p>
                                <a className="btn-slide mt-2" href="">
                                    <i className="fa fa-arrow-right" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/service-6.jpg" alt="" />
                                </div>
                                <h4 className="mb-3">Warehouse Solutions</h4>
                                <p>
                                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                                    diam.
                                </p>
                                <a className="btn-slide mt-2" href="">
                                    <i className="fa fa-arrow-right" />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
            {/* Feature Start */}
            <div className="container-fluid overflow-hidden px-lg-0">
                <div className="container feature px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div
                            className="col-lg-6 feature-text wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <h6 className="text-secondary text-uppercase mb-3">Our Features</h6>
                            <h1 className="mb-5">We Are Trusted Logistics Company Since 1990</h1>
                            <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                                <i className="fa fa-globe text-primary fa-3x flex-shrink-0" />
                                <div className="ms-4">
                                    <h5>Worldwide Service</h5>
                                    <p className="mb-0">
                                        Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem
                                        sit clita duo justo magna erat amet
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0" />
                                <div className="ms-4">
                                    <h5>On Time Delivery</h5>
                                    <p className="mb-0">
                                        Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem
                                        sit clita duo justo magna erat amet
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                                <i className="fa fa-headphones text-primary fa-3x flex-shrink-0" />
                                <div className="ms-4">
                                    <h5>24/7 Telephone Support</h5>
                                    <p className="mb-0">
                                        Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem
                                        sit clita duo justo magna erat amet
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 pe-lg-0 wow fadeInRight"
                            data-wow-delay="0.1s"
                            style={{ minHeight: 400 }}
                        >
                            <div className="position-relative h-100">
                                <img
                                    className="position-absolute img-fluid w-100 h-100"
                                    src="./src/assets/img/feature.jpg"
                                    style={{ objectFit: "cover" }}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature End */}
            {/* Pricing Start */}
            <div className="container-xxl">
                <div className="container py-5">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-secondary text-uppercase">Pricing Plan</h6>
                        <h1 className="mb-5">Perfect Pricing Plan</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="price-item">
                                <div className="border-bottom p-4 mb-4">
                                    <h5 className="text-primary mb-1">Basic Plan</h5>
                                    <h1 className="display-5 mb-0">
                                        <small
                                            className="align-top"
                                            style={{ fontSize: 22}}
                                        >
                                            $
                                        </small>
                                        49.00
                                        <small
                                            className="align-bottom"
                                            style={{ fontSize: 16 }}
                                        >
                                            / Month
                                        </small>
                                    </h1>
                                </div>
                                <div className="p-4 pt-0">
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        HTML5 &amp; CSS3
                                    </p>
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        Bootstrap v5
                                    </p>
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        FontAwesome Icons
                                    </p>
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        Responsive Layout
                                    </p>
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        Cross-browser Support
                                    </p>
                                    <a className="btn-slide mt-2" href="">
                                        <i className="fa fa-arrow-right" />
                                        <span>Order Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="price-item">
                                <div className="border-bottom p-4 mb-4">
                                    <h5 className="text-primary mb-1">Standard Plan</h5>
                                    <h1 className="display-5 mb-0">
                                        <small
                                            className="align-top"
                                            style={{ fontSize: 22 }}
                                        >
                                            $
                                        </small>
                                        99.00
                                        <small
                                            className="align-bottom"
                                            style={{ fontSize: 16 }}
                                        >
                                            / Month
                                        </small>
                                    </h1>
                                </div>
                                <div className="p-4 pt-0">
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        HTML5 &amp; CSS3
                                    </p>
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        Bootstrap v5
                                    </p>
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        FontAwesome Icons
                                    </p>
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        Responsive Layout
                                    </p>
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        Cross-browser Support
                                    </p>
                                    <a className="btn-slide mt-2" href="">
                                        <i className="fa fa-arrow-right" />
                                        <span>Order Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="price-item">
                                <div className="border-bottom p-4 mb-4">
                                    <h5 className="text-primary mb-1">Advanced Plan</h5>
                                    <h1 className="display-5 mb-0">
                                        <small
                                            className="align-top"
                                            style={{ fontSize: 22 }}
                                        >
                                            $
                                        </small>
                                        149.00
                                        <small
                                            className="align-bottom"
                                            style={{ fontSize: 16 }}
                                        >
                                            / Month
                                        </small>
                                    </h1>
                                </div>
                                <div className="p-4 pt-0">
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        HTML5 &amp; CSS3
                                    </p>
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        Bootstrap v5
                                    </p>
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        FontAwesome Icons
                                    </p>
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        Responsive Layout
                                    </p>
                                    <p>
                                        <i className="fa fa-check text-success me-3" />
                                        Cross-browser Support
                                    </p>
                                    <a className="btn-slide mt-2" href="">
                                        <i className="fa fa-arrow-right" />
                                        <span>Order Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing End */}
            {/* Quote Start */}
            <div className="container-xxl py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="text-secondary text-uppercase mb-3">Get A Quote</h6>
                            <h1 className="mb-5">Request A Free Qoute!</h1>
                            <p className="mb-5">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                lorem sit clita duo justo erat amet
                            </p>
                            <div className="d-flex align-items-center">
                                <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white" />
                                <div className="ps-4">
                                    <h6>Call for any query!</h6>
                                    <h3 className="text-primary m-0">+012 345 6789</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div
                                className="bg-light text-center p-5 wow fadeIn"
                                data-wow-delay="0.5s"
                            >
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="Your Name"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="email"
                                                className="form-control border-0"
                                                placeholder="Your Email"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="Your Mobile"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select
                                                className="form-select border-0"
                                                style={{ height: 55 }}
                                            >
                                                <option selected="">Select A Freight</option>
                                                <option value={1}>Freight 1</option>
                                                <option value={2}>Freight 2</option>
                                                <option value={3}>Freight 3</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                className="form-control border-0"
                                                placeholder="Special Note"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quote End */}
            {/* Team Start */}
            <Team />
            {/* Team End */}
            <Testimonials />
            {/* Testimonial End */}
        </>

    )
}

export default Home