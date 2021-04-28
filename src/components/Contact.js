import React from "react";
import { SocialMedia } from "./Header";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", subject: "", message: "" }
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, subject, message } = this.state;
        return (
            <div className="row">


                <div className="col-md-12 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" onSubmit={this.handleSubmit} >
                        <input type="hidden" name="form-name" value="contact-form" />

                        <div className="row">

                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" className="form-control" value={name} onChange={this.handleChange} required />
                                    <label htmlFor="name" className="">Your name</label>
                                </div>
                            </div>



                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control" value={email} onChange={this.handleChange} required />
                                    <label htmlFor="email" className="">Your email</label>
                                </div>
                            </div>


                        </div>



                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="subject" className="form-control" value={subject} onChange={this.handleChange} required />
                                    <label htmlFor="subject" className="">Subject</label>
                                </div>
                            </div>
                        </div>



                        <div className="row">


                            <div className="col-md-12">

                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows="5" className="form-control md-textarea" value={message} onChange={this.handleChange} required></textarea>
                                    <label htmlFor="message">Your message</label>
                                </div>

                            </div>
                        </div>


                    </form>

                    <div className="text-center text-md-right">
                        <button className="btn btn-primary" type="submit">Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

const Contact = () => {
    return (
        <div className="header-wraper contact-wrapper" id="contact">
            <div className="contact-content">
                <div className="component-title-area">
                    <h2 className="component-title">Contact Me</h2>
                    <p>I'm looking for work!!!!</p>
                </div>
                <div className="form-wrapper"><ContactForm /></div>
                <SocialMedia />
            </div>
        </div>
    )
};

export default Contact;
