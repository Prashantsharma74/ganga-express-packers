import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Teams = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Page Header Start */}
            <div
                className="container-fluid page-header py-5"
                style={{ marginBottom: "6rem" }}
            >
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">
                        Our Team
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link className="text-white" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="breadcrumb-item text-white active" aria-current="page">
                                Our Team
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Team Start */}
            <div className="container-xxl">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-secondary text-uppercase">Our Team</h6>
                        <h1 className="mb-5">Expert Team Members</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/team-1.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <p>Designation</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share" />
                                    <span>
                                        <a href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/team-2.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <p>Designation</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share" />
                                    <span>
                                        <a href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/team-3.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <p>Designation</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share" />
                                    <span>
                                        <a href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/team-4.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <p>Designation</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share" />
                                    <span>
                                        <a href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/team-2.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <p>Designation</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share" />
                                    <span>
                                        <a href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/team-3.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <p>Designation</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share" />
                                    <span>
                                        <a href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/team-4.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <p>Designation</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share" />
                                    <span>
                                        <a href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="./src/assets/img/team-1.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Full Name</h5>
                                <p>Designation</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share" />
                                    <span>
                                        <a href="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
        </>

    )
}

export default Teams