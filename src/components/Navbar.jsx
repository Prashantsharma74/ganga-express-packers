import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            {/* <!-- Navbar Start --> */}
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
                <Link to="/" class="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
                    <h2 class="mb-2 text-white">Ganga Express</h2>
                </Link>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" class="nav-item nav-link active">Home</Link>
                        <Link to="/about-us" class="nav-item nav-link">About</Link>
                        <Link to="/services" class="nav-item nav-link">Services</Link>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu fade-up m-0">
                                <Link to="/price" class="dropdown-item">Pricing Plan</Link>
                                <Link to="/features" class="dropdown-item">Features</Link>
                                <Link to="/quote" class="dropdown-item">Free Quote</Link>
                                <Link to="/team" class="dropdown-item">Our Team</Link>
                                <Link to="/testimonials" class="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <Link to="/contact-us" class="nav-item nav-link">Contact</Link>
                    </div>
                    <h4 class="m-0 pe-lg-5 d-none d-lg-block"><i class="fa fa-headphones text-primary me-3"></i>+91 7470734508</h4>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
        </>
    )
}

export default Navbar