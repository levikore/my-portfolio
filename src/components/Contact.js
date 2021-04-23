import React from "react";

const ContactForm = () => {
    return (
        <div className="row">


            <div className="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                    <div className="row">

                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="name" name="name" className="form-control" />
                                <label htmlFor="name" className="">Your name</label>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="email" name="email" className="form-control" />
                                <label htmlFor="email" className="">Your email</label>
                            </div>
                        </div>


                    </div>



                    <div className="row">
                        <div className="col-md-12">
                            <div className="md-form mb-0">
                                <input type="text" id="subject" name="subject" className="form-control" />
                                <label htmlFor="subject" className="">Subject</label>
                            </div>
                        </div>
                    </div>



                    <div className="row">


                        <div className="col-md-12">

                            <div className="md-form">
                                <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                <label htmlFor="message">Your message</label>
                            </div>

                        </div>
                    </div>


                </form>

                <div className="text-center text-md-right">
                    <a className="btn btn-primary" href="#!">Send</a>
                </div>
                <div className="status"></div>
            </div>



            <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                    <li><i className="fas fa-map-marker-alt fa-2x"></i>
                        <p>San Francisco, CA 94126, USA</p>
                    </li>

                    <li><i className="fas fa-phone mt-4 fa-2x"></i>
                        <p>+ 01 234 567 89</p>
                    </li>

                    <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                        <p>contact@mdbootstrap.com</p>
                    </li>
                </ul>
            </div>


        </div>
    );
}

const Contact = () => {
    return (
        <div className="header-wraper contact-wrapper" id="contact">
            <div className="contact-content">
                <div className="component-title-area">
                    <h2 className="component-title">Contact Me</h2>
                    <p>I'm looking for work!!!!</p>
                </div>
               <div className="form-wrapper"><ContactForm/></div>
            </div>
        </div>
    )
};

export default Contact;
