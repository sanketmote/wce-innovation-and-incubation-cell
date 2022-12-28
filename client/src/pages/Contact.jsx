import React from 'react';

import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();

    return (
        <div>

            {/* Page Header Start */}
            <div className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center">
                    <h1 className="display-4 text-white animated slideInDown mb-4">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Contact Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: '450px' }}>
                            <div className="position-relative h-100">
                                <iframe className="position-relative w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ minHeight: '450px', border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h6 className="text-primary text-uppercase mb-2">Contact Us</h6>
                            <h1 className="display-6 mb-4">If You Have Any Query, Please Contact Us</h1>
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control border-0 bg-light" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light" id="subject" placeholder="Subject" />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control border-0 bg-light" placeholder="Leave a message here" id="message" style={{ height: '150px' }} defaultValue={""} />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
            {/* Footer Start */}
            <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-white mb-4">Get In Touch</h4>
                            <h2 className="text-primary mb-4"><i className="text-white me-2" />WCE INNOVATION CELL</h2>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3" /> Walchand College of Engineering, Sangli - Miraj Rd, Vishrambag, Sangli, Maharashtra 416415</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3" />0233 230 0383</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3" />http://www.walchandsangli.ac.in/</p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <a className="btn btn-link" >About Us</a>
                            <a className="btn btn-link" >Contact Us</a>
                            <a className="btn btn-link" >Our Services</a>
                            <a className="btn btn-link" >Terms &amp; Condition</a>
                            <a className="btn btn-link" >Support</a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-light mb-4">Popular Links</h4>
                            <a className="btn btn-link" >About Us</a>
                            <a className="btn btn-link" >Contact Us</a>
                            <a className="btn btn-link" >Our Services</a>
                            <a className="btn btn-link" >Terms &amp; Condition</a>
                            <a className="btn btn-link" >Support</a>
                        </div>

                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Copyright Start */}
            <div className="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            © <a onClick={() => {
                                navigate("/")
                            }} >WCE Innovation and Incubation CELL</a>, All Right Reserved.
                        </div>

                    </div>
                </div>
            </div>
            {/* Copyright End */}
            {/* Back to Top */}
            <a onClick={() => {
                navigate("/")
            }} className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
        </div>
    );

};