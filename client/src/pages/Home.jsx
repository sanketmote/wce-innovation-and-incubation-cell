import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (
        <div>
            {/* Carousel Start */}
            <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" style={{ height:"55vw"}} src="/assets/img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-7">
                                            <h1 className="display-2 text-light mb-5 animated slideInDown">WCE Innovation and Incubation Cell</h1>
                                            <a  className="btn btn-primary py-sm-3 px-sm-5">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100"  style={{ height:"55vw"}} src="/assets/img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-7">
                                            <h1 className="display-2 text-light mb-5 animated slideInDown">We Incubate, Nourish & Grow Startups</h1>
                                            <a  className="btn btn-primary py-sm-3 px-sm-5">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Carousel End */}

            {/* About Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: '400px' }}>
                                <img className="position-absolute w-100 h-100" src="/assets/img/about-1.jpg" alt="" style={{ objectFit: 'cover' }} />
                                <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="/assets/img/about-2.jpg" alt="" style={{ width: '200px', height: '200px' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <h6 className="text-primary text-uppercase mb-2">About Us</h6>
                                {/* <h1 className="display-6 mb-4">We Help Students To Pass Test &amp; Get A License On The First Try</h1> */}
                                <p>Walchand College of Engineering, Sangli (hereafter refered as the Institute) is an
educational and research institute. The Institute acknowledges the contribution of various
stakcholders in the creation of Intellectual Property (IP) namely faculty, staff, Postgraduate
and graduate students and researchers.
The Institute recognizes the importance of innovations and assists in translating them into
product, process and services. The structure of this policy aims to meet such needs and to
enable the Institute to excel in technology innovation along with its stakeholders. This
policy is designed to identify and protect the IPs generated from the research.</p>
                              
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <a className="btn btn-primary py-3 px-5" >Read More</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Courses Start */}
            <div className="container-xxl courses my-6 py-6 pb-0">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <h1 className="text-primary text-uppercase mb-2">INITIATIVES</h1>
                        <h2 className="display-6 mb-4">Opening up to new possibilities</h2>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                                <div className="text-center p-4 pt-0">
                                    <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4"></div>
                                    <h5 className="mb-3">WCE Research Symposium on Computing</h5>
                                    <p>The Programme aims at fostering the culture of Innovation, Ideation, Creativity, Design Thinking and Entrepreneurship.</p>
                                    
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src="/assets/img/courses-1.jpg" alt="" />
                                    <div className="courses-overlay">
                                        <a className="btn btn-outline-primary border-2" >Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                                <div className="text-center p-4 pt-0">
                                    <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4"></div>
                                    <h5 className="mb-3">WCE ACM HACKATHON</h5>
                                    <p>ACM local chapters engage members through talks by local practitioners, field trips to computing installations, and social activities.</p>
                                   
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src="/assets/img/courses-2.jpg" alt="" />
                                    <div className="courses-overlay">
                                        <a className="btn btn-outline-primary border-2" >Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                                <div className="text-center p-4 pt-0">
                                    <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4"></div>
                                    <h5 className="mb-3">ZIMetrics</h5>
                                    <p>Advanced Data Analytics Lab</p>
                                   
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src="/assets/img/courses-3.jpg" alt="" />
                                    <div className="courses-overlay">
                                        <a className="btn btn-outline-primary border-2" >Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Courses End */}

            {/* Team Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <h6 className="text-primary text-uppercase mb-2">Meet Out Mentors</h6>
                        <h1 className="display-6 mb-4"></h1>
                    </div>
                    <div className="row g-0 team-items">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/assets/img/team-3.jpg" alt="" />
                                    <div className="team-social text-center">
                                        <a className="btn btn-square btn-outline-primar border-2 m-1" ><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-outline-primary border-2 m-1" ><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-outline-primary border-2 m-1" ><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="mt-2">Full Name</h5>
                                    <span>Trainer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/assets/img/team-4.jpg" alt="" />
                                    <div className="team-social text-center">
                                        <a className="btn btn-square btn-outline-primary border-2 m-1" ><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-outline-primary border-2 m-1" ><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-outline-primary border-2 m-1" ><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="mt-2">Full Name</h5>
                                    <span>Trainer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/assets/img/team-3.jpg" alt="" />
                                    <div className="team-social text-center">
                                        <a className="btn btn-square btn-outline-primary border-2 m-1" ><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-outline-primary border-2 m-1" ><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-outline-primary border-2 m-1" ><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="mt-2">Full Name</h5>
                                    <span>Trainer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid" src="/assets/img/team-4.jpg" alt="" />
                                    <div className="team-social text-center">
                                        <a className="btn btn-square btn-outline-primary border-2 m-1" ><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-square btn-outline-primary border-2 m-1" ><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-square btn-outline-primary border-2 m-1" ><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="mt-2">Full Name</h5>
                                    <span>Trainer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}

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
}

export default Home;
