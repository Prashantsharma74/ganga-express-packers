import React from 'react'

const Testimonials = () => {
    return (
        <>
            {/* Testimonial Start */}
            <div className="container-xxl wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="text-center">
                        <h6 className="text-secondary text-uppercase">Testimonial</h6>
                        <h1 className="mb-0">Our Clients Say!</h1>
                    </div>
                    <div
                        className="owl-carousel testimonial-carousel wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                            <div className="d-flex align-items-end mb-4">
                                <img
                                    className="img-fluid flex-shrink-0"
                                    src="./src/assets/img/testimonial-1.jpg"
                                    style={{ width: 80, height: 80 }}
                                />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <p className="mb-0">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                                amet diam et eos. Clita erat ipsum et lorem et sit.
                            </p>
                        </div>
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                            <div className="d-flex align-items-end mb-4">
                                <img
                                    className="img-fluid flex-shrink-0"
                                    src="./src/assets/img/testimonial-2.jpg"
                                    style={{ width: 80, height: 80 }}
                                />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <p className="mb-0">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                                amet diam et eos. Clita erat ipsum et lorem et sit.
                            </p>
                        </div>
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                            <div className="d-flex align-items-end mb-4">
                                <img
                                    className="img-fluid flex-shrink-0"
                                    src="./src/assets/img/testimonial-3.jpg"
                                    style={{ width: 80, height: 80 }}
                                />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <p className="mb-0">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                                amet diam et eos. Clita erat ipsum et lorem et sit.
                            </p>
                        </div>
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4" />
                            <div className="d-flex align-items-end mb-4">
                                <img
                                    className="img-fluid flex-shrink-0"
                                    src="./src/assets/img/testimonial-4.jpg"
                                    style={{ width: 80, height: 80 }}
                                />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <p className="mb-0">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                                amet diam et eos. Clita erat ipsum et lorem et sit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials