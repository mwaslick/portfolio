import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div className="section-title">
                  <h2>Contact Me</h2>
                  <div className="col-md-3">
                  <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
                  </div>

                <div className="col-md-3">
                <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> E-mail
                  </span>{" "}
                  <a href='mailto:mariawaslick@gmail.com' target='blank' className='contactlink'>
                  {this.props.data ? this.props.data.email : "loading"}
                  </a>
                  
                </p>
              </div>
                </div>

                <div className="col-md-3">
                <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-github"></i> GitHub
                  </span>{" "}
                  <a href='https://github.com/mwaslick' target='blank' className='contactlink'>
                  {this.props.data ? this.props.data.github : "loading"}
                  </a>
                </p>
              </div>
                </div>

                <div className="col-md-3">
                <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-linkedin"></i> LinkedIn
                  </span>{" "}
                  <a href='https://www.linkedin.com/in/mwaslick/' target='blank' className='contactlink'>
                  {this.props.data ? this.props.data.linkedin : "loading"}

                  </a>
                </p>
              </div>
                </div>



                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                <div className="container text-center">
            <p>
              &copy; 2020 Maria Waslick
            </p>
          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
