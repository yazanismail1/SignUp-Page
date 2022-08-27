import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Login.css';
import Button from 'react-bootstrap/Button';


class LogIn extends React.Component {
  render(){
    return (
      <section className="login">
      <img src='https://cdn-icons-png.flaticon.com/512/149/149995.png' alt="user-logo"/>
      <form>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 form"
      >
        <Form.Control className="form input" type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel className="form "  controlId="floatingPassword" label="Password">
        <Form.Control className="form input"  type="password" placeholder="Password" />
      </FloatingLabel>
      <div  className="d-grid gap-2 loginButton">
        <Button className="form btn" size="lg">
          Log In
        </Button>
      </div>
      <div className="or">
        <hr className="hr1"/>
        <hr className="hr2"/>
        or
      </div>
      <div  className="d-grid gap-2 loginButton">
        <Button className="form btn"  variant="secondary" size="lg">
          Sign Up
        </Button>
      </div>
      <div className="backgroundDiv"></div>
      </form>
      </section>
    )
  }
}

export default LogIn;
