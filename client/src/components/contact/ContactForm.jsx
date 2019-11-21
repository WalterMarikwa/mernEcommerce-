import React from "react";
// import axios from "axios";

class ValidateForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    subject: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    // axios.post("/api/contacts")
    console.log(`Users Information`, data);
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="containerForm">
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "gold" }}>Contact Us</h2>
        </div>
        <div className="row">
          <div className="column">
            <form className=".needs-validation" onSubmit={this.handleSubmit}>
              <label htmlFor="fname" style={{ color: "black" }}>
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="firstname"
                onChange={this.handleInputChange}
                placeholder="Your name.."
                required
              />
              <label htmlFor="lname" style={{ color: "black" }}>
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lastname"
                onChange={this.handleInputChange}
                placeholder="Your last name.."
                required
              />
              <label htmlFor="lname" style={{ color: "black" }}>
                Email
              </label>
              <input
                type="text"
                id="lname"
                name="email"
                onChange={this.handleInputChange}
                placeholder="Your email.."
                required
              />
              <label htmlFor="subject" style={{ color: "black" }}>
                Subject
              </label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                onChange={this.handleInputChange}
                style={{ height: "170px" }}
                // defaultValue={""}
              />
              <p>
                <button
                  onClick={this.handleSubmit}
                  type="button"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ValidateForm;
