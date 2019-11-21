import React from "react";
import axios from "axios";
import "../page_styles/Contact.css";
import ValidateForm from "../components/contact/ContactForm";
import GetContact from "../components/contact/GetContatct";

class Contact extends React.Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    axios
      .get("/contacts")
      .then(res => {
        this.setState({ contacts: res.data }, () =>
          console.log(this.state.contacts)
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <section id="footer">
        <div
          className="container wow fadeInUp"
          data-wow-delay="0.4s"
          data-wow-duration="1.5s"
        >
          <div className="row">
            <div className="col-md-8 col-sm-6">
              <h2>Get In Touch With Us!</h2>
              <hr align="left" width="50%" />
              <p>
                This company was founded by Walter Marikwa who is the Ceo of
                Instrument2.0.
              </p>
              <p>
                &#169;Instrument<span style={{ color: "gold" }}>2.0</span> by
                Walter Marikwa 2019
              </p>
              <p>Last Updated August 2019.</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="http://facebook.com">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="http://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="http://instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.snapchat.com/">
                    <i className="fab fa-snapchat"></i>
                  </a>
                </li>
              </ul>
            </div>
            <ValidateForm />

            <div className="CommentBox">
              <h2>Comment Section!</h2>
            </div>
            <div className="getContacts">
              {this.state.contacts &&
                this.state.contacts.map(contacts => (
                  <GetContact
                    firstName={contacts.firstName}
                    comments={contacts.comments}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
