import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Login.css";
import Button from "react-bootstrap/Button";
import {createRef} from "react";


class LogIn extends React.Component {

  constructor(props){
    super(props);
    this.dataCapture = createRef({});
  }

  gettingInfo = (e) => {
    e.preventDefault();
    this.dataCapture.current = {
      "email" : e.target.userEmail.value,
      "password" : e.target.userPassword.value
    }
    console.log(this.dataCapture.current);
  };

  render() {
    return (
      <section className="login">
      <div className="header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149995.png"
          alt="user-logo"
        />
        </div>
        <Form onSubmit={this.gettingInfo}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 form"
          >
            <Form.Control
              className="form input"
              type="email"
              placeholder="name@example.com"
              ref={this.dataCapture}
              id="userEmail"
            />
          </FloatingLabel>
          <FloatingLabel
            className="form "
            controlId="floatingPassword"
            label="Password"
          >
            <Form.Control
              className="input"
              type="password"
              placeholder="Password"
              ref={this.dataCapture}
              id="userPassword"
            />
          </FloatingLabel>
          <div className="d-grid gap-2 loginButton">
            <Button className="form btn btn-1" size="lg" type="submit">
              Log In
            </Button>
          </div>
          <div className="or">
            <hr className="hr1" />
            <hr className="hr2" />
            or
          </div>
          <div className="d-grid gap-2 loginButton">
            <Button
              className="form btn btn-2"
              variant="secondary"
              size="lg"
              onClick={() => {
                this.props.showModal();
              }}
            >
              Sign Up
            </Button>
          </div>
          <div className="backgroundDiv"></div>
        </Form>
      </section>
    );
  }
}

export default LogIn;
