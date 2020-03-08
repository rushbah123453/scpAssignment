import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Radios from "./Radios";
import "./radio.css";
import classnames from "classnames";

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //initial
    if (!fields["initial"]) {
      formIsValid = false;
      errors["initial"] = "Cannot be empty";
    }

    //address
    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "Cannot be empty";
    }

    //start_date
    if (!fields["start_date"]) {
      formIsValid = false;
      errors["start_date"] = "Cannot be empty";
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  resetFields = () => {
    console.log("i am in reset");

    let fields = this.state.fields;
    fields["name"] = "";
    this.setState({ fields });
    fields["initial"] = "";
    this.setState({ fields });
    fields["address"] = "";
    this.setState({ fields });
    fields["email"] = "";
    this.setState({ fields });
    fields["start_date"] = "";
    this.setState({ fields });
    // document.getElementById("scpform").reset();
  };

  render() {
    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <hr />
                <form
                  id="scpform"
                  className="contactform"
                  onSubmit={this.contactSubmit.bind(this)}
                >
                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      name="initial"
                      onChange={this.handleChange.bind(this, "initial")}
                      value={this.state.fields["initial"]}
                    >
                      <option value="">Select Initials</option>
                      <option value="TO_DO">Mr.</option>
                      <option value="IN_PROGRESS">Mrs.</option>
                      <option value="DONE">Ms.</option>
                      <option value="DONE">Miss</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["initial"]}
                    </span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Employee Name"
                      name="name"
                      onChange={this.handleChange.bind(this, "name")}
                      value={this.state.fields["name"]}
                    />{" "}
                    <span style={{ color: "red" }}>
                      {this.state.errors["name"]}
                    </span>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Employee Email ID"
                      name="email"
                      onChange={this.handleChange.bind(this, "email")}
                      value={this.state.fields["email"]}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["email"]}
                    </span>
                  </div>

                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Employee Adress"
                      name="address"
                      onChange={this.handleChange.bind(this, "address")}
                      value={this.state.fields["address"]}
                    ></textarea>
                    <span style={{ color: "red" }}>
                      {this.state.errors["address"]}
                    </span>
                  </div>

                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="start_date"
                      onChange={this.handleChange.bind(this, "start_date")}
                      value={this.state.fields["start_date"]}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["start_date"]}
                    </span>
                  </div>
                  <div className="form-group">
                    <div class="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline1"
                        name="customRadioInline1"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        for="customRadioInline1"
                      >
                        Accept
                      </label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline2"
                        name="customRadioInline1"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label"
                        for="customRadioInline2"
                      >
                        Decline
                      </label>
                    </div>
                  </div>
                  <div>
                    <div>
                      <input
                        type="submit"
                        className="btn btn-primary btn-block mt-4"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-block mt-4"
                        onClick={this.resetFields.bind(this)}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
