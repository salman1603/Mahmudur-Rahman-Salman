import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='container mt-5 pt-5 shadow'>
            <div className="row g-5">
                <div className="col-lg-6 p-5" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h4>Message Me</h4>
                    <div className="underline"></div>
                    <form className='mt-5' >
                        <div className='mb-3'>
                            <input type="text" class="form-control" placeholder="Your name" aria-label="First name" />
                        </div>
                        <div className='mb-3'>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your email" />
                        </div>
                        <div className="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary mb-3">Send Message</button>
                    </form>


                </div>


                <div className="col-lg-6 p-5">
                    <h4>Get in Touch</h4>
                    <div className="underline"></div>
                    <div className='mt-5'>
                        <div className='d-flex align-items-center justify-content-center' data-aos="fade-left" data-aos-duration="1000">
                            <i class="fas fa-phone fa-2x align-items-center text-danger"></i>
                            <div className='text-start ms-3'>
                                <h5 className='ms-2'>Phone</h5>
                                <p className='ms-2 '>+8801776145803</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center' data-aos="fade-right" data-aos-duration="2000">
                            <i class="fas fa-envelope-open fa-2x align-items-center text-danger"></i>
                            <div className='text-start ms-3'>
                                <h5 className='ms-2'>Email</h5>
                                <p className='ms-2 '>+8801776145803</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center' data-aos="fade-left" data-aos-duration="3000">
                            <i class="fas fa-map-marked fa-2x align-items-center text-danger"></i>
                            <div className='text-start ms-3'>
                                <h5 className='ms-2'>Location</h5>
                                <p className='ms-2 '>Sylhet, Bangladesh</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' data-aos="fade-right" data-aos-duration="3000">
                            <a href="www.google.com" target="_blank"><i class="fab fa-facebook fa-2x m-2 text-info"></i></a>
                            <a href="www.google.com"><i class="fab fa-instagram fa-2x m-2 text-info"></i></a>
                            <a href="www.google.com"><i class="fab fa-linkedin fa-2x m-2 text-info"></i></a>
                            <a href="www.google.com"><i class="fab fa-github fa-2x m-2 text-info"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;